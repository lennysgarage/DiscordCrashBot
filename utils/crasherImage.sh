#!/bin/bash

echo "Compiling video $1 with crasher to output video $2"
ffmpeg -i $1 -pix_fmt yuv444p -f mp4 "crashers/newvideo2.mp4" # Converting image to video
echo "file crashers/newvideo2.mp4\nfile crashers/newvideo.mp4" > crasher.txt
ffmpeg -f concat -safe 0 -y -i "crasher.txt" -codec copy $2 # Allows me to overwrite 
rm crasher.txt
rm crashers/newvideo2.mp4
echo "Goodbye."

