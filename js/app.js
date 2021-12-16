const App = () => {
    return React.createElement(
        "div", { className: "container" },
        React.createElement("p", {}, ""), [{

                image: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_account_circle_48px-512.png",
                name: "Name: Sima Azad",
                study: "Study: Software Engineering",
                hobbies: "Hobbies: Nobody Cares",
            },
            {

                image: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_account_circle_48px-512.png",
                name: "Name:osman",
                study: "Study:Collage",
                hobbies: "Hobbies:Eating",
            },
            {

                image: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_account_circle_48px-512.png",
                name: "Name:xaj",
                study: "Study:Collage",
                hobbies: "Hobbies:Reading",
            },
            {

                image: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_account_circle_48px-512.png",
                name: "Name:jhon",
                study: "Study:Collage",
                hobbies: "Hobbies:Football",
            },
        ].map((info) =>
            React.createElement(sInfo, {
                image: info.image,
                name: info.name,
                study: info.study,
                hobbies: info.hobbies,
            })
        )
    );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));