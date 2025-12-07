# Audio Files

This directory contains audio assets for the game.

## Directory Structure

- `bgm/`: Background music files
- `sfx/`: Sound effect files

## Required Files

### BGM (`/audio/bgm/`)
- `title.mp3`: Title screen music
- `game.mp3`: Main game music
- `result.mp3`: Result/Game Over screen music

### SFX (`/audio/sfx/`)
- `correct.mp3`: Correct answer sound
- `wrong.mp3`: Wrong answer sound
- `countdown.mp3`: Countdown sound (3, 2, 1)
- `start.mp3`: Game start sound (START!)

## Notes
- All audio files should be in MP3 format.
- If a file is missing, the game will log a warning to the console but continue to function (silent mode).
