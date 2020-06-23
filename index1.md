---
layout: default
title: Welcome to DataSoc
---
<div class="pageloader"></div>
<div class="infraloader is-active"></div>        
<!-- Hero and Navbar -->
<div class="hero is-bold is-large" style="background-image: url('/assets/images/events/cover.jpg'); background-position: center bottom; background-attachment: fixed; background-size: cover;">
    <div class="hero-body" style=" background:rgba(0,0,0,0.4);">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-offset-8 is-hero-title ">
                    <h2 class="subtitle is-4 has-text-light">Welcome to</h2>
                    <h1 class="title is-1 is-bigger has-text-light">DataSoc</h1> 
                    <h2 class="subtitle is-4 has-text-light">University of New South Wales</h2>
                    <p class="">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSffSdDlZLRMnWokOwlpKEVaaklL39nkgkjnZ0iaqdoL134nVA/viewform?usp=sf_link" class="button button-cta is-bold btn-align secondary-btn raised" target="blank">Join Us!</a>
                    </p>
                    <div class="social-links pt-5">
                        {% for item in site.data.contact.Media %}
                        <a href="{{ item.link }}"><span class="icon has-text-light "><i class="{{ item.img_class }}"></i></span></a>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="hero is-medium is-dark" style="background: rgb(54,54,54); background: linear-gradient(288deg, rgba(54,54,54,0.468207351299895) 6%, rgba(23,23,23,1) 62%)">
    <div class="hero-body">
        <div class="columns is-vcentered">
            <div class="column is-4">
                <div class='box has-text-centered has-background-white-ter'>
                    <h3 class='title is-2 has-text-black'>Recent Blog Posts</h3>
                    <hr>
                    {% for post in site.posts limit:3%}
                    {% if post.title != 404 %}
                        {% if post.date %}<ol><h4 class='subtitle is-5 has-text-black'><b>{{ post.date | date_to_string }}</b></h4></ol>{% endif %}
                        <ol><a href="{{ post.url }}"><h4 class='subtitle is-4 has-text-link'>{{ post.title }}</h4></a></ol>
                        <br>
                    {% endif %}
                    {% endfor %}
                    <a href="/blog/" class="button button-cta is-bold btn-align secondary-btn raised">All our posts!</a>
                </div>
            </div>
            <div class="column is-4 has-text-centered">
                <div class="columns">
                    <div class="column is-10 is-offset-1">
                        <h4 class="subtitle is-3"><i>Uniting mathematicians, econometricians and computer scientists, UNSW DataSoc empowers our members with knowledge and skills of data science, machine learning and artificial intelligence.</i></h4>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class='box  has-text-centered'>
                    <h3 class='title is-2 has-text-black'>Dates to note down </h3>
                    <hr style="border-radius: 5px;">
                    <ol><h4 class='subtitle is-5 has-text-black'><b>July 15 2020 | Google Meet</b></h4></ol>
                    <ol><h4 class='subtitle is-4 has-text-black'>Intro to Data Science - Linear Regression</h4></ol>
                    <br>
                    <ol><h4 class='subtitle is-5 has-text-black'><b>July 18 2020 | MS Teams</b></h4></ol>
                    <ol><h4 class='subtitle is-4 has-text-black'>Accent your Career with Accenture</h4></ol>
                    <br>
                    <a href="blog/" class="button button-cta is-bold btn-align secondary-btn raised">All our events!</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="hero is-bold is-medium" style="background-image: url('/assets/images/events/ibm.jpg'); background-position: center bottom; background-attachment: fixed; background-size: cover;">
    <div class="hero-body" style="background:rgba(0,0,0,0.6);">
        <div class="container">
            <div class="level">
                <div class="column is-6 is-hero-title">
                    <h2 class="subtitle is-4 has-text-white">Curated content, straight to your mailbox.</h2>
                    <a href="https://unswdata.us19.list-manage.com/subscribe/post?u=8dc568d0db37b26ed75ba4d94&amp;id=01f8128da2" class="button button-cta is-bold btn-align secondary-btn raised" target="blank">Subscribe to our newsletter!</a>
                    <br><br>
                    <h2 class="subtitle is-4 has-text-white">Or get in touch with us <a href="/contact/">here</a>.</h2>
                </div>
                <div class="column is-4">
                    <h2 class="subtitle is-4 has-text-white">Proudly sponsored by:</h2>
                    {% for tier in site.data.sponsors %}
                    <div class="columns is-gapless">
                        {% for sponsor in tier[1] %}
                        <div class="column">
                            <figure class="image is-256x256">
                                <a target="blank" href="{{ sponsor.link }}"><img src="{{ sponsor.icon }}"></a>
                            </figure>
                        </div>
                        {% endfor %}
                    </div>
                    {% endfor%}
                </div>
            </div>
        </div>
    </div>
</div>