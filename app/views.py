from app import app
from flask import render_template, request, redirect, url_for, flash
from datetime import datetime

###
# Routing for your application.
###

@app.route('/')
def home():
    """Render website's home page."""
    return render_template('home.html')


@app.route('/about-us/')
def about_us():
    """Render the website's about us page."""
    return render_template('about-us.html')

@app.route('/benefits/')
def benefits():
    """Render the benefits page."""
    return render_template('benefits.html')

@app.route('/functionality/')
def functionality():
    """Render the functionality page."""
    return render_template('functionality.html')


@app.after_request
def add_header(response):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also tell the browser not to cache the rendered page. If we wanted
    to we could change max-age to 600 seconds which would be 10 minutes.
    """
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=0'
    return response


@app.errorhandler(404)
def page_not_found(error):
    """Custom 404 page."""
    return render_template('404.html'), 404