#!/bin/bash
cd /home/ec2-user/app
npm install
pm2 start index.js || pm2 restart index.js
pm2 save
