import { IncomingMessage, ServerResponse } from 'http';

export const requestHandler = (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const url = request.url;
  if (url === '/') {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>enter message</title></head>');
    response.write('<body><h1>Hello world from typescript-config</h1e></body>');

    response.write('</html>');
    return response.end();
  }
};
