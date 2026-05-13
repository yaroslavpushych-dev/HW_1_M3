function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
}

function addFormAttributes(el, name, type, checked, placeholder) {
    if (name) el.name = name;
    if (type) el.type = type;
    if (checked !== undefined) el.checked = checked;
    if (placeholder) el.setAttribute('placeholder', placeholder)
    return el;
}

function createForm() {
    const form = createElement("form", "form");
    document.body.appendChild(form);

    const mainText = createElement("h1", 'mainText', "CREATE AN ACCOUNT");
    const middleText = createElement('span', 'slimText', "We always keep your name and email address private.");

    const inputsContainer = createElement("div", "inputsContainer");

    form.append(mainText, middleText, inputsContainer);

    const row1 = createElement("div", "input-row");
    const row2 = createElement("div", "input-row");
    const row3 = createElement("div", "input-row");

    inputsContainer.append(row1, row2, row3);

    const rowItems = [
        {
            row: row1,
            text: "First Name",
            type: "text"
        },
        {
            row: row1,
            text: "Last Name",
            type: "text"
        },
        {
            row: row2,
            text: "Display Name",
            type: "text"
        },
        {
            row: row2,
            text: "Email Address",
            type: "email"
        },
        {
            row: row3,
            text: "Password",
            type: "password"
        },
        {
            row: row3,
            text: "Password Confirmation",
            type: "password"
        }
    ]

    for (let i = 0; i < rowItems.length; i++) {
        const inputItem = createElement("input", "input-item");
        addFormAttributes(inputItem, null, rowItems[i].type, null, rowItems[i].text);
        inputItem.required = true;
        rowItems[i].row.appendChild(inputItem);
    }

    const block1 = createElement("label", "block");
    const wrapper1 = createElement("div", "wrapper");
    const block2 = createElement("label", "block");
    const wrapper2 = createElement("div", "wrapper");

    form.append(block1, block2);
    block1.appendChild(wrapper1);
    block2.appendChild(wrapper2);

    const blockItems = [
        {
            block: block1,
            checked: true,
            title: "Join As a Buyer",
            description: "I am looking for a Name, Logo or Tagline for my business, brand or product."
        },
        {
            block: block2,
            checked: false,
            title: "Join As a Creative or Marketplace Seller",
            description: "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace"
        }
    ];

    let topText;
    let bottomText;
    for (let i = 0; i < blockItems.length; i++) {
        const radioBtn = createElement("input", "rad");
        addFormAttributes(radioBtn, "radioBtn", "radio", blockItems[i].checked)
        blockItems[i].block.prepend(radioBtn);

        topText = createElement("div", "topText", blockItems[i].title);
        bottomText = createElement("div", "bottomText", blockItems[i].description);
        const currentWrapper = i ? wrapper2 : wrapper1;
        currentWrapper.append(topText, bottomText);
    }

    const lastWrapper = createElement("div", "lastWrapper");
    form.appendChild(lastWrapper);

    const chb = createElement("input", "chb");
    addFormAttributes(chb, "allowCheckbox", "checkbox", false)
    const allowText = createElement("label", "bottomText", "Allow Squadhelp to send marketing/promotional offers from time to time");
    const createBtn = createElement("input", "createBtn");
    addFormAttributes(createBtn, "createBtn", "submit")
    createBtn.value = "Create account";
    allowText.prepend(chb);
    lastWrapper.append(allowText, createBtn);
}

createForm();