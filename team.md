---
layout: landing-banner
title: Our Team
subtitle: Meet the team behind the magic.
colour: is-info
title-image: city2_left.png
permalink: /about/team/
---

<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
<div class="hero-body">
	{% assign portfolios = "Executives, External, Internal" | split: ", " %}
	<div class="tabs is-boxed is-centered main-menu is-large" id="nav">
		<ul>
			{% for i in (0..2) %}
			{% if forloop.first == true %}
				{% assign active_status = "is-active" %}
			{% else %}
				{% assign active_status = "" %}
			{% endif %}
			<li data-target="pane-{{ i | plus: 1 }}" id="{{ i | plus: 1 }}" class="{{ active_status }}">
				<a><h2 class="title is-3">{{ portfolios[i] }}</h2></a>
			</li>
			{% endfor %}
		</ul>
	</div>
	<div class="tab-content">
	{% for i in (0..2) %}
		{% assign portfolio = site.team | where:"portfolio",portfolios[i] %}
		{% if forloop.first == true %}
			{% assign active_status = "is-active" %}
		{% else %}
			{% assign active_status = "" %}
		{% endif %}
		<div class="tab-pane {{ active_status }}" id="pane-{{ i | plus: 1}}">
			<div class="content">
				<div class="container">
					{% assign remaining_people = portfolio.size %}
					{% for person in portfolio %}
					{% assign value = forloop.index0 | modulo: 4 %}
					{% if value == 0 %}
						{% if forloop.index0 != 0 %}
					</div>
						{% endif %}
					<div class="columns">
						{% if remaining_people == 2 %}
					<div class="column is-3">
					</div>
						{% elsif remaining_people == 1 %}
					<div class="column is-4">
					</div>
						{% elsif remaining_people == 3 %}
						<div class="column is-2">
						</div>
						{% endif %}
					{% endif %}
						<div class="column is-3">
							{% include team-card.html image=person.image name=person.name position=person.position degree=person.degree one_line=person.one_line %}
						</div>
						{% include team-modal-card.html name=person.name image=person.image position=person.position degree=person.degree content=person.content one_line=person.one_line %}
					{% assign remaining_people = remaining_people | minus: 1 %}
					{% endfor %}
					</div>
				</div>
			</div>
		</div>
	{% endfor %}
</div>
<script src="/assets/js/modals.js"></script>