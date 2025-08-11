@echo off
cd /d "c:\Users\Carlyle\Desktop\ysl-redesign11082025"
echo Installing dependencies...
call npm install
echo Starting development server...
set NODE_ENV=development
call npm run dev
pause
