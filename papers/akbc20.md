---
layout: paper 
title: "XREF: Entity Linking for Chinese News Comments with Supplementary Article Reference"
permalink: /Resources/akbc20/
---

#### _Xinyu Hua_, Lei Li, Lifeng Hua, and Lu Wang (AKBC 2020)

<img src="{{site.resourceurl}}/akbc2020/akbc_entlnk_intro.png" style="width:720px;" >


**Abstract**:
Automatic identification of mentioned entities in social media posts facilitates quick digestion of trending topics and popular opinions. Nonetheless, this remains a challenging task due to limited context and diverse name variations. 
In this paper, we study the problem of entity linking for Chinese news comments given mentions’ spans. 
We hypothesize that comments often refer to entities in the corresponding news article, as well as topics involving the entities. 
We therefore propose a novel model, XREF, that leverages attention mechanisms to (1) pinpoint relevant context within comments, and (2) detect supporting entities from the news article. To improve training, we make two contributions: (a) we
propose a supervised attention loss in addition to the standard cross entropy, and (b) we develop a weakly supervised training scheme to utilize the large-scale unlabeled corpus.
Two new datasets in entertainment and product domains are collected and annotated for experiments. Our proposed method outperforms previous methods on both datasets.



[[pdf][paper_pdf]] [[code][code_link]] [[bibtex][bib_link]]

[paper_pdf]: {{site.resourceurl}}/akbc2020/akbc2020.pdf
[code_link]: https://github.com/XinyuHua/xref-chinese-el
[bib_link]: {{ site.resourceurl }}/bibtex/akbc20.bib
[data_link]: https://drive.google.com/open?id=1oR5JmlsTihG8t_0FjYTGGijSgGsB9Js_
