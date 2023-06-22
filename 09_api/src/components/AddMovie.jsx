import React, { useRef } from 'react'

const AddMovie = (props) => {
    const titleRef = useRef("");
    const textRef = useRef("");
    const dataRef = useRef("");

    const submitHandler = (e) => {
        e.preventDefault();

        const movie = {
            title: titleRef.current.value,
            openingText: textRef.current.value,
            releaseDate: dataRef.current.value
        }
        props.onAddMovie(movie);
        clearValue();
    }

    //입력후 input 정리
    const clearValue = () => {
        titleRef.current.value = "";
        textRef.current.value = "";
        dataRef.current.value = "";
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='control'>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div className='control'>
                <label htmlFor="text">Opening Text</label>
                <textarea rows='5' id="text" ref={textRef} />
            </div>
            <div className='control'>
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={dataRef} />
            </div>
            <button>Add Movie</button>
        </form>
    )
}

export default AddMovie