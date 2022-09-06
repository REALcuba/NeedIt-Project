import React from 'react'
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components'
const steps=[
  {
    id:'0',
    message:'Hello!Welcome to the need it website',
    trigger:'1',
   },{
    id:'1',
    message:'Please write your name ',
    trigger:'2',
   },{
    id:'2',
    user:true,
    trigger:'3',
   },{
    id:'3',
    message:'hi {previousValue},How can I help you?',
    trigger:'4',
   },{
    id:'4',
    options :[
      {value : 1, label:'regarding Products',trigger:'5'},
      {value : 2, label:'something else', trigger:'6'},
      
    ],
    
   },

 
 {
   id: '5',
   message: 'Reagrding products go to homepage and choose the valid option from the catagories.',
   
 },
 {
   id: '6',
   message: 'For More queries pls share your email and our team back to you soon!Best wishes',
   end: true,
 },

];
const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: "https://banner2.cleanpng.com/20190628/wtz/kisspng-chatbot-oneplus-5t-emoji-android-human-skin-color-5d1645f19dd8c4.5226370815617407856465.jpg",
  floating: true,
};
function Chat() {
  return (
<div className="Chat">
    
    <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="chat"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
    
    </div>
  )
}

export default Chat