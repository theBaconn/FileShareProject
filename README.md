# FileShareProject
 Django-React based file sharing application that demonstrates basic securiy features and implementation

<h3>Frontend( React )</h3><br>
To install dependency<br>
<code>npm install</code><br>
To start the server<br>
<code>npm start</code><br>
For Production Build<br>
<code>npm run build</code><br>
I have used proxy http://127.0.0.1 for axios in package.json<br>
You can set axios.defaults.baseURL = https://api.example.com Globally<br>
<h3>Backend( Django )</h3>

Requirements
To install requirements type

<code>pip install -r requirements.txt</code>
To use Github api put your credentials in settings.py

GIT_CLIENT_ID = 'your github client id'
GIT_CLIENT_SECRET = 'your github client secret'
To migrate the database open terminal in project directory and type

<code>python manage.py makemigrations</code><br>
<code>python manage.py migrate</code><br>
To run the program in local server use the following command<br>
<br>
<code>python manage.py runserver</code><br>
Server will be available at http://127.0.0.1:8000 in your browser<br>
