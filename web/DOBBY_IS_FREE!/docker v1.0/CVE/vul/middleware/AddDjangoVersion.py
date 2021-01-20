class AddDjangoVersion:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response['Version'] = "Django:3.0.1, Postgres:11-alpine"
        return response