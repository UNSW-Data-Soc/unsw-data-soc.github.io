---
layout: default
title: Welcome to DataSoc
---
<div class="pageloader"></div>
<div class="infraloader is-active"></div>        
<!-- Hero and Navbar -->
<div class="hero is-bold is-medium" style="background-image: url('/assets/images/events/ibm.jpg'); background-position: center bottom; background-attachment: fixed; background-size: cover;">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-offset-8 is-hero-title">
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
<div class="hero is-medium">
    <div class="hero-body">
        <div class="columns is-vcentered">
            <div class="column is-7 has-text-centered">
                <div class="columns">
                    <div class="column is-three-fifths is-offset-one-fifth">
                        <h4 class="subtitle is-3"><i>Uniting mathematicians, econometricians and computer scientists, UNSW DataSoc empowers our members with knowledge and skills of data science, machine learning and artificial intelligence.</i></h4>
                    </div>
                </div>
            </div>
            <div class="column is-5">
                <div class='box'>
                    <h3 class='title is-2 has-text-centered'>Dates to note down </h3>
                    <hr>
                    <ol><div class="box is-outlined">
                            <h4 class='title is-4 has-text-centered'>Intro to Data Science - Linear Regression</h4>
                            <h4 class='has-text-centered'> July 15 2020 | Google Meet</h4>
                        </div>
                    </ol>
                    <ol><div class="box is-outlined">
                            <h4 class='title is-4 has-text-centered'>Accent your Career with Accenture</h4>
                            <h4 class='has-text-centered'> July 18 2020 | MS Teams</h4>
                        </div>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="hero is-bold is-medium" style="background-image: url('/assets/images/events/ibm.jpg'); background-position: center bottom; background-attachment: fixed; background-size: cover;">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-4 is-hero-title has-background-light" style="opacity: 0.9;">
                    <h2 class="subtitle is-4 has-text-black">Curated content, straight to your mailbox.</h2>
                    <a href="https://unswdata.us19.list-manage.com/subscribe/post?u=8dc568d0db37b26ed75ba4d94&amp;id=01f8128da2" class="button button-cta is-bold btn-align is-info" target="blank">Subscribe here!</a>
                    <br><br>
                    <h2 class="subtitle is-4 has-text-black">Or get in touch with us <a href="/contact/">here</a>.</h2>
                </div>
            </div>
        </div>
    </div>
</div>