#!/bin/bash

echo "Compiling video $1 with crasher to output video $2"
ffmpeg -i "crashers/black.mp4" -pix_fmt yuv444p -f mp4 "crashers/newvideo.mp4"
echo "file $1\nfile crashers/newvideo.mp4" > crasher.txt
ffmpeg -f concat -safe 0 -y -i "crasher.txt" -codec copy $2
rm crasher.txt
rm crashers/newvideo.mp4
echo "Goodbye."