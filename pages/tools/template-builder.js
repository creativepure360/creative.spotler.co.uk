import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useImmerReducer } from "use-immer";
import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import NoSSR from "react-no-ssr";

const data = [
  {
    id: uuid(),
    name: "A",
  },
  {
    id: uuid(),
    name: "B",
  },
  {
    id: uuid(),
    name: "C",
  },
];

const reducer = (
  draft,
  { type, sourceId, sourceIndex, destinationId, destinationIndex }
) => {
  draft[sourceId] = draft[sourceId] || [];
  draft[destinationId] = draft[destinationId] || [];
  switch (type) {
    case "MOVE":
      const [removed] = draft[sourceId].splice(sourceIndex, 1);
      draft[destinationId].splice(destinationIndex, 0, removed);
      return;
    case "COPY":
      draft[destinationId].splice(destinationIndex, 0, {
        ...draft[sourceId],
        name: data[sourceIndex].name,
        id: uuid(),
      });
      return;
    case "DELETE":
      draft[sourceId].splice(sourceIndex, 1);
      return;
  }
};

const initialState = {
  components: data,
};

const Index = () => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const onDragEnd = useCallback(({ reason, source, destination }) => {
    if (reason === "DROP") {
      if (!destination) {
        return;
      }
      if (source.droppableId == "build" && destination.droppableId == "build") {
        dispatch({
          type: "MOVE",
          sourceId: source.droppableId,
          destinationId: destination.droppableId,
          sourceIndex: source.index,
          destinationIndex: destination.index,
        });
      }
      if (
        source.droppableId == "components" &&
        destination.droppableId == "build"
      ) {
        dispatch({
          type: "COPY",
          sourceId: source.droppableId,
          destinationId: destination.droppableId,
          sourceIndex: source.index,
          destinationIndex: destination.index,
        });
      }
      if (
        source.droppableId == "build" &&
        destination.droppableId == "delete"
      ) {
        dispatch({
          type: "DELETE",
          sourceId: source.droppableId,
          destinationId: destination.droppableId,
          sourceIndex: source.index,
          destinationIndex: destination.index,
        });
      }
    }
  }, []);

  return (
    <>
      <Header />
      <Main>
        <NoSSR>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="bg-gray-100 p-4 mb-4">
              <span className="font-avant-garde-bold">Components</span>
              <Droppable
                droppableId="components"
                type="COMPONENTS"
                isDropDisabled={true}
              >
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {state.components?.map(({ id, name }, index) => (
                      <Draggable draggableId={id} key={id} index={index}>
                        {(provided, snapshot) => (
                          <>
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className="bg-floss-pink text-white text-2xl font-avant-garde-bold pt-2 px-2 mb-2"
                            >
                              {name}
                            </div>
                            {snapshot.isDragging && (
                              <div className="bg-floss-pink text-white text-2xl font-avant-garde-bold pt-2 px-2 mb-2">
                                {name}
                              </div>
                            )}
                          </>
                        )}
                      </Draggable>
                    ))}
                    {/* {provided.placeholder} */}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="bg-gray-100 p-4 mb-4">
              <span className="font-avant-garde-bold">Build</span>
              <Droppable droppableId="build" type="COMPONENTS">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={
                      snapshot.isDraggingOver
                        ? "border-2 border-black border-dashed"
                        : ""
                    }
                  >
                    {state.build?.map(({ id, name }, index) => (
                      <Draggable draggableId={id} key={id} index={index}>
                        {(provided, snapshot) => {
                          // snapshot
                          return (
                            <>
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                className="bg-floss-pink text-white text-2xl font-avant-garde-bold pt-2 px-2 mb-2"
                              >
                                {name}
                              </div>
                            </>
                          );
                        }}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="bg-red-100 p-4 mb-4">
              <span className="font-avant-garde-bold">Delete</span>
              <Droppable droppableId="delete" type="COMPONENTS">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={
                      snapshot.isDraggingOver
                        ? "border-2 border-red-600 border-dashed"
                        : ""
                    }
                  >
                    {state.delete?.map(({ id, name }, index) => (
                      <Draggable draggableId={id} key={id} index={index}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="bg-floss-pink text-white text-2xl font-avant-garde-bold pt-2 px-2 mb-2"
                          >
                            {name}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </NoSSR>
      </Main>
      <Footer />
    </>
  );
};

export default Index;
