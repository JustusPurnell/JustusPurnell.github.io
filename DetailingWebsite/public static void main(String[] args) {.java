import java.util.*;

public class EightQueensHillClimbing {
    static final int SIZE = 8;
    static Random rand = new Random();

    public static void main(String[] args) {
        int restarts = 0;
        int stateChanges = 0;

        int[] board = generateRandomBoard();
        int h = heuristic(board);

        while (h != 0) {
            int[] next = getBestNeighbor(board);
            int nextH = heuristic(next);

            System.out.println("Current h: " + h);
            printBoard(board);
            System.out.println("Neighbors found with lower h: " + countBetterNeighbors(board, h));

            if (nextH >= h) {
                System.out.println("RESTART\n");
                board = generateRandomBoard();
                h = heuristic(board);
                restarts++;
            } else {
                System.out.println("Setting new current state\n");
                board = next;
                h = nextH;
                stateChanges++;
            }
        }

        System.out.println("Solution Found!\n");
        printBoard(board);
        System.out.println("State changes: " + stateChanges);
        System.out.println("Restarts: " + restarts);
    }

    static int[] generateRandomBoard() {
        int[] board = new int[SIZE];
        for (int i = 0; i < SIZE; i++) {
            board[i] = rand.nextInt(SIZE);
        }
        return board;
    }

    static int heuristic(int[] board) {
        int h = 0;
        for (int i = 0; i < SIZE; i++) {
            for (int j = i + 1; j < SIZE; j++) {
                if (board[i] == board[j] || Math.abs(board[i] - board[j]) == Math.abs(i - j)) {
                    h++;
                }
            }
        }
        return h;
    }

    static int[] getBestNeighbor(int[] board) {
        int[] bestBoard = Arrays.copyOf(board, SIZE);
        int bestH = heuristic(board);

        for (int col = 0; col < SIZE; col++) {
            int originalRow = board[col];
            for (int row = 0; row < SIZE; row++) {
                if (row != originalRow) {
                    int[] tempBoard = Arrays.copyOf(board, SIZE);
                    tempBoard[col] = row;
                    int tempH = heuristic(tempBoard);
                    if (tempH < bestH) {
                        bestH = tempH;
                        bestBoard = Arrays.copyOf(tempBoard, SIZE);
                    }
                }
            }
        }
        return bestBoard;
    }

    static int countBetterNeighbors(int[] board, int currentH) {
        int count = 0;
        for (int col = 0; col < SIZE; col++) {
            int originalRow = board[col];
            for (int row = 0; row < SIZE; row++) {
                if (row != originalRow) {
                    int[] tempBoard = Arrays.copyOf(board, SIZE);
                    tempBoard[col] = row;
                    int tempH = heuristic(tempBoard);
                    if (tempH < currentH) {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    static void printBoard(int[] board) {
        for (int row = 0; row < SIZE; row++) {
            for (int col = 0; col < SIZE; col++) {
                if (board[col] == row) {
                    System.out.print("1");
                } else {
                    System.out.print("0");
                }
                if (col < SIZE - 1) System.out.print(",");
            }
            System.out.println();
        }
        System.out.println();
    }
}
