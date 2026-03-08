#!/bin/bash

tmux new -s Ali

php -S localhost:8080 -t backend && tmux attach -t Ali

npx serve frontend
