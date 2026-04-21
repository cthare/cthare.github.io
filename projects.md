---
layout: page
title: Projects
permalink: /projects/
---

A short selection of public work. Everything here links out to the source on GitHub.

<ul class="project-list">
  {% for project in site.data.projects %}
  <li>
    <h2><a href="{{ project.links.github }}">{{ project.name }}</a></h2>
    <p>{{ project.summary }}</p>
    <p class="tech">{{ project.tech | join: " · " }}</p>
  </li>
  {% endfor %}
</ul>
