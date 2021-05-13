import {ADD_USUARIO, AGREGAR} from '../Types'

const initialState = {data:['Hello, my name is orlando. What’s is yours?', 'Hola, mi nombre es orlando. ¿Cuál es el tuyo?',
'Pleased to meet you, Mary. My name’s orlando.', 'Encantado de conocerte, Mary. Mi nombre es Orlando.',
'Nice to meet you. Where are you from?', 'Un placer conocerte. ¿De donde eres?',
'I’m from Michigan. Detroit, specifically. And you? Where are you from?', 'Yo soy de Michigan. Detroit, específicamente. ¿Y usted? ¿De donde eres?',
'I’m from Las Vegas.', 'Soy de Las Vegas. ',],
count:0,
usuarios:[[{email:'Chato',password:'2106'}],]
};

export const Reducer = (state = initialState, action) => {
  switch(action.type){
    case AGREGAR:
      return{
        ...state,
        data : [
          ...state.data,
          [].concat(action.payload[0]),
          [].concat(action.payload[1])
        ]
      };
    case ADD_USUARIO:
      return {
        ...state,
        usuarios: [
          ...state.usuarios,
          [].concat(action.payload)
        ]
      };
  
    default:
      return state;
  }
} 