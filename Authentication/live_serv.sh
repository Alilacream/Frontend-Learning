#!/bin/bash

SESSION="auth-dev"

tmux new-session -d -s "$SESSION"

tmux send-keys -t "$SESSION" "cd frontend && npx serve" C-m
tmux split-window -t "$SESSION" -h
tmux send-keys -t "$SESSION" "php -S localhost:8080 -t backend" C-m

tmux attach-session -t "$SESSION"
