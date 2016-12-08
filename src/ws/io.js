import socketio from 'socket.io';

let io = socketio();

io.on('connection', (socket) => { });

export default io;