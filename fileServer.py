from aiohttp import web

async def handle(request):
    with open('test.html', 'r') as file:
        html_content = file.read()
    return web.Response(text=html_content, content_type='text/html')

async def handle_js(request):
    with open('./dist/web.js', 'r') as file:
        content = file.read()
    return web.Response(text=content, content_type='text/javascript')

app = web.Application()
app.router.add_get('/', handle)
app.router.add_get('/dist/web.js', handle_js)
web.run_app(app)
