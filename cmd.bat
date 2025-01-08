@echo off
if "%1"=="guess" (
    shift
    node %~dp0guess-cli.js %*
) else (
    node %~dp0date-cli.js %*
)
