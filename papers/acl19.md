---
layout: page
title: Argument Generation with Retrieval, Planning, and Realization
permalink: /Resources/acl19/
---

### _Xinyu Hua_, Zhe Hu, and Lu Wang 
#### Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics (ACL), 2019. (To Appear)

### Abstract
Automatic argument generation is an appealing but challenging task.
In this paper, we study the specific problem of counter-argument generation, and present a novel framework, CANDELA. It consists of a powerful retrieval system and a novel two-step generation model, where a text planning decoder first decides on the main talking points and a proper language style for each sentence, then a content realization decoder reflects the decisions and constructs an informative paragraph-level argument.
Furthermore, our generation model is empowered by a retrieval system indexed with 12 million articles collected from Wikipedia and popular English news media, which provides access to high-quality content with diversity. 
Automatic evaluation on a large-scale dataset collected from Reddit shows that our model yields significantly higher BLEU, ROUGE, and METEOR scores than the state-of-the-art and non-trivial comparisons. Human evaluation further indicates that our system arguments are more appropriate for refutation and richer in content. 

<br>[[pdf][acl19_pdf]] [[arxiv][acl19_arxiv]] [[bibtex][acl19_bib]]


[acl19_pdf]: {{ site.resourceurl }}/acl2019/acl19_paper.pdf
[acl19_arxiv]: 404.md
[acl19_bib]:  {{site.resourceurl}}/bibtex/acl2019.bib
