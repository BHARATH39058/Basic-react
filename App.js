const parent =React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I  am a TAG!"),
        React.createElement("h2",{},"I  am a TAG!")]),
        React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I  am a TAG!"),
        React.createElement("h2",{},"I  am a TAG!")])])




const heading =React.createElement("h1",{id:"heading"},"Kl University");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);