---
layout: paper 
title: Argument Generation with Retrieval, Planning, and Realization
permalink: /Resources/acl19/
---

#### _Xinyu Hua_, Zhe Hu, and Lu Wang (ACL 2019)

<img src="{{site.resourceurl}}/acl2019/acl2019_system.png" style="width:720px;" >

**Abstract**: Automatic argument generation is an appealing but challenging task.
In this paper, we study the specific problem of counter-argument generation, and present a novel framework, CANDELA. It consists of a powerful retrieval system and a novel two-step generation model, where a text planning decoder first decides on the main talking points and a proper language style for each sentence, then a content realization decoder reflects the decisions and constructs an informative paragraph-level argument.
Furthermore, our generation model is empowered by a retrieval system indexed with 12 million articles collected from Wikipedia and popular English news media, which provides access to high-quality content with diversity. 
Automatic evaluation on a large-scale dataset collected from Reddit shows that our model yields significantly higher BLEU, ROUGE, and METEOR scores than the state-of-the-art and non-trivial comparisons. Human evaluation further indicates that our system arguments are more appropriate for refutation and richer in content. 


[[pdf][paper_pdf]] [[demo][demo_link]] [[code][code_link]] [[data][data_link]] [[bibtex][bib_link]] 


[paper_pdf]: {{ site.resourceurl }}/acl2019/acl2019.pdf
[demo_link]: https://xinyuhua.github.io/candela
[code_link]: https://xinyuhua.github.io/candela
[bib_link]: {{ site.resourceurl }}/bibtex/acl2019.bib
[data_link]: https://drive.google.com/drive/folders/1fl9uxfkplJtbEppx4XeJ77nI0Iov_ZYL?usp=sharing
