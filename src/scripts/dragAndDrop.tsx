import Modules from "..";

function DragAndDrop() {
    const [boxes, setBoxes] = Modules.useState([
        { id: 1, title: "Box 1", column: 1 },
        { id: 2, title: "Box 2", column: 1 },
        { id: 3, title: "Box 3", column: 2 },
        { id: 4, title: "Box 4", column: 2 },
        { id: 5, title: "Box 5", column: 3 },
        { id: 6, title: "Box 6", column: 3 }
    ]);

    const [columnNames, setColumnNames] = Modules.useState(["Column 1", "Column 2", "Column 3"]);

    const handleDragStart = (e:any, id:any) => {
        e.dataTransfer.setData("text/plain", id);
        e.dataTransfer.effectAllowed = "move";
    };

    const handleDrop = (e:any, column:any) => {
        const boxId = e.dataTransfer.getData("text/plain");
        const newBoxes = boxes.map(box =>
        box.id.toString() === boxId ? { ...box, column } : box
        );
        setBoxes(newBoxes);
    };

    const handleDoubleClickColumn = (index:any) => {
        const newColumnNames = [...columnNames];
        const newColumnName = prompt("Enter new column name:", columnNames[index]);
        if (newColumnName !== null) {
        newColumnNames[index] = newColumnName;
        setColumnNames(newColumnNames);
        }
    };

    const handleDoubleClickBox = (id:any) => {
        const newBoxes = [...boxes];
        const index = newBoxes.findIndex(box => box.id === id);
        const newTitle = prompt("Enter new box title:", newBoxes[index].title);
        if (newTitle !== null) {
        newBoxes[index].title = newTitle;
        setBoxes(newBoxes);
        }
    };

    return (
        <div className="App">
        <div className="column column1" onDrop={e => handleDrop(e, 1)} onDragOver={e => e.preventDefault()}>
            <h2 onDoubleClick={() => handleDoubleClickColumn(0)}>{columnNames[0]}</h2>
            {boxes
            .filter(box => box.column === 1)
            .map(box => (
                <div
                key={box.id}
                className="box box1"
                draggable
                onDragStart={e => handleDragStart(e, box.id)}
                onDoubleClick={() => handleDoubleClickBox(box.id)}
                style={{ backgroundColor: 'var(--colorPrimary)' }}
                >
                <h3
                    onDoubleClick={() => handleDoubleClickBox(box.id)}
                    contentEditable={true}
                    >
                    {box.title}
                </h3>

                </div>
            ))}
        </div>
        <div className="column column2" onDrop={e => handleDrop(e, 2)} onDragOver={e => e.preventDefault()}>
            <h2 onDoubleClick={() => handleDoubleClickColumn(1)}>{columnNames[1]}</h2>
            {boxes
            .filter(box => box.column === 2)
            .map(box => (
                <div
                key={box.id}
                className="box box2"
                draggable
                onDragStart={e => handleDragStart(e, box.id)}
                onDoubleClick={() => handleDoubleClickBox(box.id)}
                style={{ backgroundColor: 'var(--colorSecondary)' }}
                >
                <h3
                onDoubleClick={() => handleDoubleClickBox(box.id)}
                contentEditable={true}
                >
                    {box.title}
                </h3>

                </div>
            ))}
        </div>
        <div className="column column3" onDrop={e => handleDrop(e, 3)} onDragOver={e => e.preventDefault()}>
            <h2 onDoubleClick={() => handleDoubleClickColumn(2)}>{columnNames[2]}</h2>
            {boxes
            .filter(box => box.column === 3)
            .map(box => (
                <div
                key={box.id}
                className="box box3"
                draggable
                onDragStart={e => handleDragStart(e, box.id)}
                onDoubleClick={() => handleDoubleClickBox(box.id)}
                style={{ backgroundColor: 'var(--colorTertiary)' }}
                >
                <h3
                onDoubleClick={() => handleDoubleClickBox(box.id)}
                contentEditable={true}
                >
                    {box.title}
                </h3>

                </div>
            ))}
        </div>
        </div>
    );
}

export default DragAndDrop;
