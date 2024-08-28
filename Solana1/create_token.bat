@echo off
setlocal

REM Set environment variables
set TOTAL_SUPPLY=1000000000
set DECIMALS=9

REM Create token
for /f "tokens=2 delims=[]" %%a in ('spl-token create-token --decimals %DECIMALS%') do set F6Q8uGxiuvXkZLz1B38a6cmtWhj48ccQVUBKba5tXore=%%a
echo Token Address: %TOKEN_ADDRESS%

REM Create token account
for /f "tokens=2 delims=[]" %%a in ('spl-token create-account %F6Q8uGxiuvXkZLz1B38a6cmtWhj48ccQVUBKba5tXore%') do set 6cUwvpKBkeHF8zCKs4WCp771t6TjzMMEusUBSVqfFUND=%%a
echo Token Account Address: %6cUwvpKBkeHF8zCKs4WCp771t6TjzMMEusUBSVqfFUND%

REM Mint tokens
spl-token mint %TOKEN_ADDRESS% %TOTAL_SUPPLY%
echo Minted %TOTAL_SUPPLY% tokens to %6cUwvpKBkeHF8zCKs4WCp771t6TjzMMEusUBSVqfFUND%

REM Verify balance
spl-token balance %TOKEN_ADDRESS%

endlocal
