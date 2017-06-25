# Tic-Tac-Toe
>Paper-and-pencil game for two players :couple: , X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.
### Further Details
|   |  |  |
| --- | --- | --- |
| 1  | 2  | 3  |
| 4  | 5  | 6  |
| 7  | 8  | 9  |

When X plays 1 as their opening move, then O should take 5. Then X takes 9 (in this situation, O should not take 3 or 7, O should take 2, 4, 6 or 8): :speech_balloon:
- X1 → O5 → X9 → O2 → X8 → O7 → X3 → O6 → X4, this game will be a draw.

or 6 (in this situation, O should not take 4 or 7, O should take 2, 3, 8 or 9. In fact, taking 9 is the best move, since a non-perfect player X may take 4, then O can take 7 to win).
- X1 → O5 → X6 → O2 → X8, then O should not take 3, or X can take 7 to win, and O should not take 4, or X can take 9 to win, O should take 7 or 9.
- X1 → O5 → X6 → O2 → X8 → O7 → X3 → O9 → X4, this game will be a draw.
- X1 → O5 → X6 → O2 → X8 → O9 → X4 (7) → O7 (4) → X3, this game will be a draw.
- X1 → O5 → X6 → O3 → X7 → O4 → X8 (9) → O9 (8) → X2, this game will be a draw.
- X1 → O5 → X6 → O8 → X2 → O3 → X7 → O4 → X9, this game will be a draw.
- X1 → O5 → X6 → O9, then X should not take 4, or O can take 7 to win, X should take 2, 3, 7 or 8.
- X1 → O5 → X6 → O9 → X2 → O3 → X7 → O4 → X8, this game will be a draw.
- X1 → O5 → X6 → O9 → X3 → O2 → X8 → O4 (7) → X7 (4), this game will be a draw.
- X1 → O5 → X6 → O9 → X7 → O4 → X2 (3) → O3 (2) → X8, this game will be a draw.
- X1 → O5 → X6 → O9 → X8 → O2 (3, 4, 7) → X4/7 (4/7, 2/3, 2/3) → O7/4 (7/4, 3/2, 3/2) → X3 (2, 7, 4), this game will be a draw.

:trollface: :trollface: :trollface:
