void FirstCinderProject::draw()
{	
 gl::color(Color(1.0f, 1.0f, 0.5f));
 gl::drawSolidEllipse(vec2(150, 100), 100, 50, 100);
 gl::drawStrokedEllipse(vec2(400, 300), 100, 175, 150);
 gl::drawSolidRoundedRect(Rectf(550, 150, 600, 300), 20, 4);
 gl::drawStrokedRoundedRect(Rectf(20, 300, 200, 400), 10, 10);
};