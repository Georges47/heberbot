const IMAGE_PATH = './images';
const VOICE_PATH = './voices'

exports.commands = [
  { 
    name: 'heber que es el comunismo', 
    replyType: 'text', 
    replyCaption: 'Donde te vistes de blanco y te dan una oblea no'
  },
  {
    name: 'heber peldon', 
    replyType: 'image', 
    replyFileSource: `${IMAGE_PATH}/heber_peldon.jpg` , 
    replyCaption: 'PELDON'
  },
  { 
    name: 'peldon', 
    replyType: 'text', 
    replyCaption: 'Peldon pol pedil peldon'
  },
  {
    name: 'heber', 
    replyType: 'image', 
    replyFileSource: `${IMAGE_PATH}/heber.jpg` , 
    replyCaption: 'VENDO TRACTOR MARCA VENIRAN CON HEBER MONTAO 100 BOLOS'
  },
  {
    name: 'peldon heber', 
    replyType: 'image', 
    replyFileSource: `${IMAGE_PATH}/peldon_heber.jpg` , 
    replyCaption: 'PELDON PELDON'
  },
  {
    name: 'guti', 
    replyType: 'image', 
    replyFileSource: `${IMAGE_PATH}/culo_joseba.jpg` , 
    replyCaption: ''
  },
  {
    name: 'canta papagayo', 
    replyType: 'voice', 
    replyFileSource: `${VOICE_PATH}/canta_papagayo.mp3` , 
    replyCaption: ''
  },
  {
    name: 'gaylord',
    replyType: 'voice',
    replyFileSource: `${VOICE_PATH}/sandui.mp3`,
    replyCaption: ''
  },
  {
    name: 'pa ve como ta ese coco',
    replyType: 'voice',
    replyFileSource: `${VOICE_PATH}/esecocotaweno.mp3`,
    replyCaption: ''
  }
];
