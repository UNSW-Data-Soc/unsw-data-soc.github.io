---
layout: landing
title: Our Team
title-image: city2_left.png
permalink: /about/team-card/
introduction: |
  Surprisingly, even in this era of automation, UNSW DataSoc is still managed by a team of longwithstanding, soon-to-be-obsolete humans.
  <br><br>
  We are, however, all extremely proud to be a part of this amazing society to help other students develop skills and knowledge in data science and artificial intelligence.
  <br><br>
  <b><i>TODO:</i></b>
  <br>
  <ul><li>Get nice photos of everyone</li><li>Get a quote/q&a from everyone</li></ul>
---

<div class="hero-body">
	<div class="tabs is-boxed is-centered main-menu is-large" id="nav">
		<ul>
			<li data-target="pane-1" id="1" class="is-active">
				<a><h2 class="title is-3">Execs</h2></a>
			</li>
			<li data-target="pane-2" id="2">
				<a><h2 class="title is-3">External</h2></a>
			</li>
			<li data-target="pane-3" id="3">
				<a><h2 class="title is-3">Internal</h2></a>
			</li>
			<li data-target="pane-4" id="4">
				<a><h2 class="title is-3">Postgrad</h2></a>
			</li>
		</ul>
	</div>
	<div class="tab-content">
	{% for portfolio in site.data.team %}
		{% if forloop.first == true %}
			{% assign active_status = "is-active" %}
		{% else %}
			{% assign active_status = "" %}
		{% endif %}
		<div class="tab-pane {{ active_status }}" id="pane-{{ forloop.index }}">
			<div class="content">
				<div class="container">
					{% assign remaining_people = portfolio[1].size %}
					{% for person in portfolio[1] %}
					{% assign value = forloop.index0 | modulo: 4 %}
					{% if value == 0 %}
						{% if forloop.index0 != 0 %}
					</div>
						{% endif %}
					<div class="columns">
						{% if remaining_people == 2 %}
					<div class="column is-3">
					</div>
						{% endif %}
					{% endif %}
						<div class="column is-3">
							<div class="card">
								<div class="card-image is-square">
								  <figure class="image is-256x256">
									<img src="{{ person.image | prepend: '/assets/images/team/' }}" alt="Placeholder image">
								  </figure>
								</div>
								<div class="card-content">
								  <div class="media">
									<div class="media-content">
									  <p class="title is-4">{{ person.name }}</p>
									  <p class="subtitle is-6">{{ person.position }}</p>
									</div>
								  </div>
								  <div class="content">
									<p><i>{{ person.degree }}</i></p>
									<p>{{ person.description }}</p>
								  </div>
								</div>
							  </div>
						</div>
					{% assign remaining_people = remaining_people | minus: 1 %}
					{% endfor %}
					</div>
				</div>
			</div>
		</div>
	{% endfor %}
</div>