import { useState } from "react";

const inicialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(inicialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {

        //IMPORTANTE: não devo alterar o valor do ARRAY OU OBJ diretamente (tipos primitivos podem).
        //em vez disso, criar uma cópia e retornar como State.
        //Motivo: respeitar o schedule do react, não alterar o obj em memória fora de ordem
        
        setGameBoard((prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updateBoard[rowIndex][colIndex] = 'X';
            return updateBoard
        })
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            )}
        </ol>
    );
}