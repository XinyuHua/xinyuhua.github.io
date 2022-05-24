---
layout: paper
title: "Efficient Argument Structure Extraction with Transfer Learning and Active Learning"
permalink: /Resources/acl22/
---

#### _Xinyu Hua_ and Lu Wang (Findings of ACL 2022)

<img src="{{site.resourceurl}}/acl2022/acl2022_thumbnail.png" style="width:720px;" >

**Abstract**:

The automation of extracting argument structures faces a pair of challenges on (1) encoding long-term contexts to facilitate comprehensive understanding, and (2) improving data efficiency since constructing high-quality argument structures is time-consuming. In this work, we propose a novel context-aware Transformer-based argument structure prediction model which, on five different domains, significantly outperforms models that rely on features or only encode limited contexts. To tackle the difficulty of data annotation, we examine two complementary methods: (i) transfer learning to leverage existing annotated data to boost model performance in a new target domain, and (ii) active learning to strategically identify a small amount of samples for annotation. We further propose model-independent sample acquisition strategies, which can be generalized to diverse domains. With extensive experiments, we show that our simple-yet-effective acquisition strategies yield competitive results against three strong comparisons. Combined with transfer learning, substantial F1 score boost (5-25) can be further achieved during the early iterations of active learning across domains.

[[paper][paper_link]] [[data][data_link]] [code coming soon]

[data_link]: https://zenodo.org/record/6362430#.Yki2-hDML0p
[paper_link]: https://aclanthology.org/2022.findings-acl.36.pdf
