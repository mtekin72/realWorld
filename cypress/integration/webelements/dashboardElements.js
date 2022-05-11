/// <reference types="cypress" />



module.exports = {
    locators: {
     
        newPostButton:'[href="#editor"]',
        articleTitle:':nth-child(1) > .form-control',
        articleAbout:':nth-child(2) > .form-control',
        writeArticle:':nth-child(3) > .form-control',
        enterTag:':nth-child(4) > .form-control',
        editProfileSettings:'.action-btn',
        deleteArticle:'.btn-outline-danger'
       

     

    },

};
