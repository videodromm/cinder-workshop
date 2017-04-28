#include "cinder/app/App.h"
#include "cinder/app/RendererGl.h"
#include "cinder/gl/gl.h"
#include "cinder/utilities.h"
#include "cinder/audio/Context.h"
#include "cinder/audio/MonitorNode.h"

using namespace ci;
using namespace ci::app;
using namespace std;

class InputAnalyzerApp : public App {
  public:
	void setup() override;
	void resize() override;
	void update() override;
	void draw() override;
  private:
	audio::InputDeviceNodeRef		mInputDeviceNode;
	audio::MonitorSpectralNodeRef	mMonitorSpectralNode;
	vector< float >					mMagSpectrum;
	deque< vector< float > >		mSpectrums;
	int displaySize;
};

void InputAnalyzerApp::setup()
{
	auto ctx = audio::Context::master();

	mInputDeviceNode = ctx->createInputDeviceNode();
	auto scopeFmt =
		audio::MonitorSpectralNode::Format().fftSize(32).windowSize(16);
	mMonitorSpectralNode = ctx->makeNode(new audio::MonitorSpectralNode(scopeFmt));

	mInputDeviceNode >> mMonitorSpectralNode;

	mInputDeviceNode->enable();
	ctx->enable();

	getWindow()->setTitle(mInputDeviceNode->getDevice()->getName());
}

void InputAnalyzerApp::resize()
{
	// called only when resized (on startup too)
	displaySize = getWindowWidth();
}
void InputAnalyzerApp::update()
{
	mMagSpectrum = mMonitorSpectralNode->getMagSpectrum();
	if (mSpectrums.size() > 50)
	{
		mSpectrums.pop_front();
	}
	else
	{
		mSpectrums.push_back(mMagSpectrum);
	}
}

void InputAnalyzerApp::draw()
{
	getWindow()->setTitle( toString((int)getAverageFps()) + " fps");
	gl::clear();
	float scale = displaySize / (float)mMagSpectrum.size();
	float maxY;
	for (int j = 0; j < mSpectrums.size(); j++)
	{
		PolyLine2f	bufferLine;
		for (int i = 0; i < mSpectrums[j].size(); i++)
		{
			maxY = 0.0;
			float x = (i * scale - 4) + 5;
			//get the PCM value from the buffer
			float y = 10 + ((mSpectrums[j][i] - 1) * -5)*j*1.8;
			maxY = (mSpectrums[j][i] > maxY) ? mSpectrums[j][i] : maxY;
			bufferLine.push_back(vec2(x, y));
		}
		gl::color(Color(1.0f, maxY*100, j / 255.0));
		gl::draw(bufferLine);
	}
	getWindow()->setTitle(toString((int)getAverageFps()) + " fps, maxY: " + toString(maxY));

}

CINDER_APP( InputAnalyzerApp, RendererGl )
