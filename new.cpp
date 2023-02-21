// mycpp.cpp
#include <emscripten.h>
#include <stdio.h>
extern "C"
{
 EMSCRIPTEN_KEEPALIVE
 double _rotateAngle;
 double _nr;
 void speedUpdate(double factor, double rotateAngle, double nr)
 {
  if (factor == 1)
  {
   if (rotateAngle <= -0.005)
    rotateAngle = -1 * rotateAngle;
   nr = rotateAngle;
  }
  else if (factor == -1)
  {
   if (rotateAngle >= 0.005)
    rotateAngle = -1 * rotateAngle;
   nr = rotateAngle;
  }
  else if (factor == 3)
  {
   rotateAngle = nr;
  }
  else if (factor == 0)
  {
   rotateAngle = 0;
  }
  else
  {
   rotateAngle = factor * rotateAngle;
   nr = rotateAngle;
  }
  _nr = nr;
  _rotateAngle = rotateAngle;
 }

 double fnOne()
 {
  return _nr;
 }
 double fnTwo()
 {
  return _rotateAngle;
 }
}
