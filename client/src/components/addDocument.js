import React from 'react';
import './addDocument.css';

export default class AddDocument extends React.Component {
    onSubmit(event) {
        event.preventDefault();
    }
    render() {

    return (
          <div className="form">
            <form className="card add-document" onSubmit={e => this.onSubmit(e)}>
                <li>
                  <ul>
                    <label>Doctor:
                        <input type="text" name="doctor" />
                    </label>
                  </ul>
                  <ul>
                    <label>Address:
                        <input type="text" name="Address" />
                    </label>
                  </ul>
                  <ul>
                    <label>Phone:
                        <input type="text" name="phone" />
                    </label>
                  </ul>
                  <ul>
                    <label>Document
                        <input type="file" name="document" />
                    </label>
                  </ul>
                </li>
                <button>Add</button>
                <button type="button">
                    Cancel
                </button>
            </form>
          </div>
        );
    }
}
