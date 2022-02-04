var blazorInterop = blazorInterop || {};

blazorInterop.initHTMLUnlayer = function () {
    unlayer.init({
        id: 'editor-container',
        displayMode: 'email',
        user: {
            id: 1,
            signature: 'TestSignature',// Hide signature
            name: 'Jerald Sanchez', // optional
            email: 'jeraldsanchez@test.com' // optional
        },
        tools: {
            button: {
                enabled: true
            }
        },
        editor: {
            confirmOnDelete: true
        }
    });
}

blazorInterop.setMergeTags = function () { // Make it dynamic
    unlayer.setMergeTags({
        first_name: {
            name: "First Name",
            value: "{{firstName}}"
        },
        last_name: {
            name: "Last Name",
            value: "{{lastName}}"
        }
    });
}

blazorInterop.getHTML = function (data) {
    unlayer.exportHtml(function (data) {
        console.log(data.html);
    });
    return data;
};

blazorInterop.getJSON = function (data) {
    unlayer.exportHtml(function (data) {
        console.log(data.design);
    });
    return data;
};

blazorInterop.loadHTML = function (object) {
    var design = {
        "counters": {
            "u_column": 9,
            "u_row": 7,
            "u_content_image": 11,
            "u_content_text": 2
        },
        "body": {
            "id": "kVvmUr-9e8",
            "rows": [
                {
                    "id": "o6zxIp6K3Y",
                    "cells": [
                        1
                    ],
                    "columns": [
                        {
                            "id": "O5Rpx4TXBP",
                            "contents": [
                                {
                                    "id": "6F4aT4vaFl",
                                    "type": "image",
                                    "values": {
                                        "containerPadding": "10px",
                                        "src": {
                                            "url": "https://cdn.templates.unlayer.com/assets/1637508459370-KKK.png",
                                            "width": 600,
                                            "height": 145
                                        },
                                        "textAlign": "center",
                                        "altText": "",
                                        "action": {
                                            "name": "web",
                                            "values": {
                                                "href": "",
                                                "target": "_blank"
                                            }
                                        },
                                        "displayCondition": null,
                                        "_meta": {
                                            "htmlID": "u_content_image_2",
                                            "htmlClassNames": "u_content_image"
                                        },
                                        "selectable": true,
                                        "draggable": true,
                                        "duplicatable": true,
                                        "deletable": true,
                                        "hideable": true
                                    }
                                }
                            ],
                            "values": {
                                "backgroundColor": "#508ec2",
                                "padding": "0px",
                                "border": {},
                                "_meta": {
                                    "htmlID": "u_column_1",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }
                    ],
                    "values": {
                        "displayCondition": null,
                        "columns": false,
                        "backgroundColor": "",
                        "columnsBackgroundColor": "",
                        "backgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": false,
                            "center": true,
                            "cover": false
                        },
                        "padding": "0px",
                        "hideDesktop": false,
                        "_meta": {
                            "htmlID": "u_row_1",
                            "htmlClassNames": "u_row"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                },
                {
                    "id": "w6NeIuUPJ-",
                    "cells": [
                        1
                    ],
                    "columns": [
                        {
                            "id": "nrh7--zX5e",
                            "contents": [
                                {
                                    "id": "vjHBSsKZi9",
                                    "type": "image",
                                    "values": {
                                        "containerPadding": "10px",
                                        "src": {
                                            "url": "https://cdn.templates.unlayer.com/assets/1637506949936-sdds.png",
                                            "width": 800,
                                            "height": 797
                                        },
                                        "textAlign": "center",
                                        "altText": "",
                                        "action": {
                                            "name": "web",
                                            "values": {
                                                "href": "",
                                                "target": "_blank"
                                            }
                                        },
                                        "displayCondition": null,
                                        "_meta": {
                                            "htmlID": "u_content_image_3",
                                            "htmlClassNames": "u_content_image"
                                        },
                                        "selectable": true,
                                        "draggable": true,
                                        "duplicatable": true,
                                        "deletable": true,
                                        "hideable": true
                                    }
                                }
                            ],
                            "values": {
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_2",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }
                    ],
                    "values": {
                        "displayCondition": null,
                        "columns": false,
                        "backgroundColor": "",
                        "columnsBackgroundColor": "",
                        "backgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": false,
                            "center": true,
                            "cover": false
                        },
                        "padding": "0px",
                        "_meta": {
                            "htmlID": "u_row_2",
                            "htmlClassNames": "u_row"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                },
                {
                    "id": "Lz_wehQzd2",
                    "cells": [
                        1
                    ],
                    "columns": [
                        {
                            "id": "37bqDc06V7",
                            "contents": [
                                {
                                    "id": "tP5Dgkqwol",
                                    "type": "text",
                                    "values": {
                                        "containerPadding": "10px",
                                        "color": "#776e43",
                                        "textAlign": "left",
                                        "lineHeight": "140%",
                                        "linkStyle": {
                                            "inherit": true,
                                            "linkColor": "#0000ee",
                                            "linkHoverColor": "#0000ee",
                                            "linkUnderline": true,
                                            "linkHoverUnderline": true
                                        },
                                        "displayCondition": null,
                                        "_meta": {
                                            "htmlID": "u_content_text_1",
                                            "htmlClassNames": "u_content_text"
                                        },
                                        "selectable": true,
                                        "draggable": true,
                                        "duplicatable": true,
                                        "deletable": true,
                                        "hideable": true,
                                        "text": "<p style=\"font-size: 14px; line-height: 140%; text-align: center;\"><span style=\"font-size: 22px; line-height: 30.8px;\"><strong>THE PROJECT IS READY TO BE DELIVERED</strong></span></p>"
                                    }
                                }
                            ],
                            "values": {
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_3",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }
                    ],
                    "values": {
                        "displayCondition": null,
                        "columns": false,
                        "backgroundColor": "",
                        "columnsBackgroundColor": "",
                        "backgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": false,
                            "center": true,
                            "cover": false
                        },
                        "padding": "0px",
                        "_meta": {
                            "htmlID": "u_row_3",
                            "htmlClassNames": "u_row"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                },
                {
                    "id": "lGUn_ziFy2",
                    "cells": [
                        1
                    ],
                    "columns": [
                        {
                            "id": "N-Scmy3K-M",
                            "contents": [
                                {
                                    "id": "HYAhAnDihk",
                                    "type": "text",
                                    "values": {
                                        "containerPadding": "10px",
                                        "color": "#776e43",
                                        "textAlign": "center",
                                        "lineHeight": "140%",
                                        "linkStyle": {
                                            "inherit": true,
                                            "linkColor": "#0000ee",
                                            "linkHoverColor": "#0000ee",
                                            "linkUnderline": true,
                                            "linkHoverUnderline": true
                                        },
                                        "displayCondition": null,
                                        "_meta": {
                                            "htmlID": "u_content_text_2",
                                            "htmlClassNames": "u_content_text"
                                        },
                                        "selectable": true,
                                        "draggable": true,
                                        "duplicatable": true,
                                        "deletable": true,
                                        "hideable": true,
                                        "text": "<p style=\"font-size: 14px; line-height: 140%;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
                                    }
                                }
                            ],
                            "values": {
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_4",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }
                    ],
                    "values": {
                        "displayCondition": null,
                        "columns": false,
                        "backgroundColor": "",
                        "columnsBackgroundColor": "",
                        "backgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": false,
                            "center": true,
                            "cover": false
                        },
                        "padding": "0px",
                        "_meta": {
                            "htmlID": "u_row_4",
                            "htmlClassNames": "u_row"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                },
                {
                    "id": "vO8T6hKCyA",
                    "cells": [
                        1,
                        1,
                        1
                    ],
                    "columns": [
                        {
                            "id": "OqT3Q5joJP",
                            "contents": [
                                {
                                    "id": "-VLsVHQSXJ",
                                    "type": "image",
                                    "values": {
                                        "containerPadding": "10px",
                                        "src": {
                                            "url": "https://cdn.templates.unlayer.com/assets/1637520342973-22.png",
                                            "width": 512,
                                            "height": 512,
                                            "autoWidth": false,
                                            "maxWidth": "60%"
                                        },
                                        "textAlign": "center",
                                        "altText": "",
                                        "action": {
                                            "name": "web",
                                            "values": {
                                                "href": "",
                                                "target": "_blank"
                                            }
                                        },
                                        "displayCondition": null,
                                        "_meta": {
                                            "htmlID": "u_content_image_11",
                                            "htmlClassNames": "u_content_image"
                                        },
                                        "selectable": true,
                                        "draggable": true,
                                        "duplicatable": true,
                                        "deletable": true,
                                        "hideable": true,
                                        "_override": {
                                            "mobile": {
                                                "src": {
                                                    "autoWidth": false,
                                                    "maxWidth": "26%"
                                                }
                                            }
                                        }
                                    }
                                }
                            ],
                            "values": {
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_5",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        },
                        {
                            "id": "7O7S6kmg8l",
                            "contents": [
                                {
                                    "id": "Y7x7zV4V3x",
                                    "type": "image",
                                    "values": {
                                        "containerPadding": "10px",
                                        "src": {
                                            "url": "https://cdn.templates.unlayer.com/assets/1637520102450-11.png",
                                            "width": 512,
                                            "height": 512,
                                            "autoWidth": false,
                                            "maxWidth": "60%"
                                        },
                                        "textAlign": "center",
                                        "altText": "",
                                        "action": {
                                            "name": "web",
                                            "values": {
                                                "href": "",
                                                "target": "_blank"
                                            }
                                        },
                                        "displayCondition": null,
                                        "_meta": {
                                            "htmlID": "u_content_image_10",
                                            "htmlClassNames": "u_content_image"
                                        },
                                        "selectable": true,
                                        "draggable": true,
                                        "duplicatable": true,
                                        "deletable": true,
                                        "hideable": true,
                                        "_override": {
                                            "mobile": {
                                                "src": {
                                                    "autoWidth": false,
                                                    "maxWidth": "26%"
                                                }
                                            }
                                        }
                                    }
                                }
                            ],
                            "values": {
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_7",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        },
                        {
                            "id": "om86qnG5Mw",
                            "contents": [
                                {
                                    "id": "BQ98WCdOLE",
                                    "type": "image",
                                    "values": {
                                        "containerPadding": "10px",
                                        "src": {
                                            "url": "https://cdn.templates.unlayer.com/assets/1637520320656-33.png",
                                            "width": 512,
                                            "height": 512,
                                            "autoWidth": false,
                                            "maxWidth": "57%"
                                        },
                                        "textAlign": "center",
                                        "altText": "",
                                        "action": {
                                            "name": "web",
                                            "values": {
                                                "href": "",
                                                "target": "_blank"
                                            }
                                        },
                                        "displayCondition": null,
                                        "_meta": {
                                            "htmlID": "u_content_image_7",
                                            "htmlClassNames": "u_content_image"
                                        },
                                        "selectable": true,
                                        "draggable": true,
                                        "duplicatable": true,
                                        "deletable": true,
                                        "hideable": true,
                                        "_override": {
                                            "mobile": {
                                                "src": {
                                                    "autoWidth": false,
                                                    "maxWidth": "26%"
                                                }
                                            }
                                        }
                                    }
                                }
                            ],
                            "values": {
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_8",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }
                    ],
                    "values": {
                        "displayCondition": null,
                        "columns": false,
                        "backgroundColor": "",
                        "columnsBackgroundColor": "",
                        "backgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": false,
                            "center": true,
                            "cover": false
                        },
                        "padding": "0px",
                        "_meta": {
                            "htmlID": "u_row_5",
                            "htmlClassNames": "u_row"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                },
                {
                    "id": "RLTn5gvG0e",
                    "cells": [
                        1
                    ],
                    "columns": [
                        {
                            "id": "oeSYiyMBBN",
                            "contents": [],
                            "values": {
                                "backgroundColor": "#bbbbbb",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_6",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }
                    ],
                    "values": {
                        "displayCondition": null,
                        "columns": false,
                        "backgroundColor": "",
                        "columnsBackgroundColor": "",
                        "backgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": false,
                            "center": true,
                            "cover": false
                        },
                        "padding": "0px",
                        "_meta": {
                            "htmlID": "u_row_6",
                            "htmlClassNames": "u_row"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }
            ],
            "values": {
                "textColor": "#000000",
                "backgroundColor": "#e7e7e7",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": false,
                    "center": true,
                    "cover": false
                },
                "contentWidth": "500px",
                "contentAlign": "center",
                "fontFamily": {
                    "label": "Arial",
                    "value": "arial,helvetica,sans-serif"
                },
                "preheaderText": "",
                "linkStyle": {
                    "body": true,
                    "linkColor": "#0000ee",
                    "linkHoverColor": "#0000ee",
                    "linkUnderline": true,
                    "linkHoverUnderline": true
                },
                "_meta": {
                    "htmlID": "u_body",
                    "htmlClassNames": "u_body"
                }
            }
        },
        "schemaVersion": 7
    };
    unlayer.loadDesign(design);
}

blazorInterop.showAlert = function (message) {
    window.alert("Please open browser console");
}
