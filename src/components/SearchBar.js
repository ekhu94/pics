import React from 'react';

class SearchBar extends React.Component {
    onInputChange(e) {
        console.log(e.target.value);
    }

    // onFormSubmit(e) {
    //     e.preventDefault();
    //     const input = document.querySelector('input');
    //     console.log(`submitted: ${input.value}`)
    // }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={ this.onInputChange } />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;