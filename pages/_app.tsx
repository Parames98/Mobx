import { observable, action, runInAction } from 'mobx';
import { observer } from 'mobx-react';


const dataStore = observable({
    name: [],
});

const handleKeyPress = action((event) => {
    const input = event.target.value;
    runInAction(() => {
        dataStore.name.push(input);
        console.log('My data:', dataStore.name);
    });
    event.target.value = '';
});

function Index() {
    return (
        <div>
            <div style={{ border: '1px solid black', borderRadius: 20, margin: 200 }}>
                <div style={{ padding: 20 }}>
                    <div style={{ marginBottom: 5 }}>Add Name:</div>
                    <div>
                        <input
                            style={{ border: '1px solid black', marginRight: 5 }}
                            type="text"
                        />
                        <button
                            style={{ border: '1px solid black', paddingRight: 5, paddingLeft: 5 }}
                            onClick={handleKeyPress}
                        >
                            Add
                        </button>
                    </div>
                    <ul style={{ marginBottom: 5 }}>
                        {dataStore.name.length !== 0 ?
                            dataStore.name.map((n, index) => {
                                return (
                                    <h1 key={index}>{index+1}. {n}</h1>
                                )
                            }) : <h1>No data</h1>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default observer(Index);
