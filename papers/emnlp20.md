---
layout: paper
title: "PAIR : Planning and Iterative Refinement in Pre-trained Transformersfor Long Text Generation"
permalink: /Resources/emnlp20/
---

#### _Xinyu Hua_ and Lu Wang (EMNLP 2020)

<img src="{{site.resourceurl}}/emnlp2020/emnlp2020_system.png" style="width:720px;" >

**Abstract**:

Pre-trained Transformers have enabled impressive breakthroughs in generating long and fluent text, yet their outputs are often "rambling" without coherently arranged content. 
In this work, we present a novel content-controlled text generation framework, PAIR, with planning and iterative refinement, which is built upon a large model, BART.
We first adapt the BERT model to automatically construct the content plans, consisting of keyphrase assignments and their corresponding sentence-level positions. 
The BART model is employed for generation without modifying its structure. 
We then propose a refinement algorithm to gradually enhance the generation quality within the sequence-tosequence framework. 
Evaluation with automatic metrics shows that adding planning consistently improves the generation quality on three distinct domains, with an average of 20 BLEU points and 12 METEOR points improvements. 
In addition, human judges rate our system outputs to be more relevant and coherent than comparisons without planning.


[[pdf][pdf_link]] [[code][code_link]] [[bibtex][bib_link]]

[code_link]: https://github.com/XinyuHua/pair-emnlp2020
[bib_link]: {{ site.resourceurl }}/bibtex/emnlp2020.bib
[pdf_link]: {{site.resourceurl}}/emnlp2020/EMNLP2020_xinyu_arxiv.pdf
