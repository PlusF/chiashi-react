export const Pages = {
    'Japanese': ['ホーム', 'お知らせ', '研究', 'メンバー', '論文', '講義', 'オープンラボ', 'アクセス'],
    'English': ['Home', 'News', 'Research', 'Members', 'Publications', 'Lectures', 'OpenLab', 'Access'],
    links: ['/chiashi/react', '/chiashi/react/news', '/chiashi/react/research', '/chiashi/react/members', '/chiashi/react/papers', '/chiashi/react/lectures', '/chiashi/react/openlab', '/chiashi/react/access']
}

export const TitleStr = {
    'Japanese': ['千足研究室', '東京大学大学院工学系研究科機械工学専攻'],
    'English': ['CHIASHI LABORATORY', 'Department of Mechanical Engineering, The University of Tokyo'],
}

export const IntroductionStr = {
    'Japanese': {
        title: '研究室紹介',
        content: `千足研究室では，通常の材料とは異なる興味深い物性を持つカーボンナノチューブやグラフェンなどナノスケールの材料（ナノ材料）の合成技術や分析手法の開発，そしてその応用に向けた研究を行っています．ナノ材料研究を通じ，ナノ材料と他の物質から構成される複合構造の構築，ナノスケールでの新しい物理・化学的現象解明，物質・エネルギー輸送特性等の解明を目指しています．ナノテクノロジーの発展に貢献するとともに，環境やエネルギー問題の解決も目指しながら、研究を進めています．
        千足研究室では，当専攻はもちろん，他専攻や他大学からも含め博士課程進学希望者を広く募集しています．お気軽にお問い合わせください．`,
    },
    'English': {
        title: 'Introduction',
        content: `The Chiashi Laboratory develops synthesis techniques and analytical methods for nanoscale materials (nanomaterials) such as carbon nanotubes and graphene, which have interesting properties different from those of ordinary materials, and conducts research for their applications. Through nanomaterials research, we aim to construct composite structures composed of nanomaterials and other materials, elucidate new physical and chemical phenomena at the nanoscale, and clarify material and energy transport properties. Our research contributes to the development of nanotechnology, while also aiming to solve environmental and energy problems.
        We are looking for students who wish to enter the doctoral course, not only from our department, but also from other departments and universities. Please feel free to contact us.`,
    }
}

export const NewsStr = {
    'Japanese': {
        title: 'ニュース',
        content: [
            {
                date: '2023/07/07',
                news: '千足研究室のホームページをリニューアルしました．'
            },
            {
                date: '2023/05/27',
                news: 'M1の西田君，M1の西村君が第60回日本伝熱シンポジウムで発表を行いました．'
            },
            {
                date: '2023/03/24',
                news: 'M1の金田君，M2の神前君がIWEPNM23で発表を行いました．'
            },
            {
                date: '2021/01/01',
                news: '千足研究室のホームページをリニューアルしました．'
            },
        ]
    },
    'English': {
        title: 'News',
        content: [
            {
                date: '2021/01/01',
                news: 'The homepage of the Chiashi Laboratory has been renewed.'
            },
            {
                date: '2023/07/07',
                news: 'The homepage of the Chiashi Laboratory has been renewed.'
            }
        ]
    }
}

export const ResearchStr = {
    'Japanese': {
        title: '研究内容',
        detail: 'もっと見る',
        optics: {
            title: `ナノチューブの合成と分光計測・評価`,
            content: `(To Do: Update)単層CNTはナノサイズかつ擬一次元的な構造を持つことから，通常のバルク物質とは異なる光物性を持ち，物理的に興味深い研究対象です．
            同時に，分析ツールとしての確立や，光デバイスへの応用のためにも，単層CNTの分光法の研究が求められています．本研究室では，蛍光分光法，光吸収分光法，ラマン散乱分光法，レイリー散乱分光法などを用いて単層CNTの光物性を研究しています．`,
        },
        vdw: {
            title: `グラフェンなど二次元層状物質の合成，ナノ構造構築技術`,
            content:`(To Do: Update)グラフェンは炭素原子1層からなる二次元物質で，その発見者が2010年にノーベル賞を受賞するなど，近年非常に注目されています．
            セロハンテープでグラファイトを剥離することで数μm程度のグラフェンのかけらを得ることができますが，工業的な応用のためにはより大面積にグラフェンを作製する必要があります．私たちは，アルコールを原料としたCVD法を用いて，5 mm以上の単結晶単層グラフェンの合成や，AB積層構造の2層グラフェンの選択合成を行っています．
            また，グラフェンやその他の2次元物質を構造制御合成し，太陽電池などへ応用する研究を進めています．`,
        },
        film: {
            title: `カーボンナノチューブ導電性材料の開発`,
            content: `(To Do: Update)`,
        },
    },
    'English': {
        title: 'Researches',
        detail: 'See more',
        optics: {
            title: `(To Do: Check)Synthesis and spectroscopic measurement and characterization of nanotubes`,
            content: `(To Do: Update)Single-walled CNTs are physically interesting because of their nanosize and quasi-one-dimensional structure, which makes their optical properties different from those of ordinary bulk materials. At the same time, the spectroscopic study of single-walled CNTs is required to establish them as an analytical tool and to apply them to optical devices. 
            In this laboratory, we study the optical properties of single-walled CNTs by fluorescence spectroscopy, optical absorption spectroscopy, Raman scattering spectroscopy, and Rayleigh scattering spectroscopy.`,
        },
        vdw: {
            title: `(To Do: Check)Synthesis of two-dimensional layered materials such as graphene, nanostructure construction technology`,
            content: `(To Do: Update)Graphene is a two-dimensional material consisting of a single layer of carbon atoms, and has attracted much attention in recent years, including the Nobel Prize awarded to its discoverer in 2010. Although pieces of graphene of a few micrometers can be obtained by peeling off graphite with cellophane tape, it is necessary to fabricate graphene over a larger area for industrial applications. 
            We have synthesized single-crystalline monolayer graphene larger than 5 mm and selectively synthesized bilayer graphene with AB stacking structure using alcohol-based CVD method. We are also working on structure-controlled synthesis of graphene and other two-dimensional materials for applications such as solar cells.`,
        },
        film: {
            title: `(To Do: Check)Development of Carbon Nanotube Conductive Materials`,
            content: `(To Do: Update)`,
        },
    }
}

export const MembersStr = {
    'Japanese': {
        title: 'メンバー',
        professor: {
            name: '千足 昇平 准教授',
            details: '2016.02 - 現在: 准教授 (丸山・千足研究室), 東京大学大学院 工学系研究科 機械工学専攻',
            links: [
                {name: 'CV', link: 'http://www.photon.t.u-tokyo.ac.jp/~chiashi/CV-E.html'},
                {name: 'UT Mech Profile', link: 'http://www2.mech.t.u-tokyo.ac.jp/research/%E5%8D%83%E8%B6%B3-%E6%98%87%E5%B9%B3/'},
                {name: 'Web of Science', link: 'https://publons.com/researcher/1464516/shohei-chiashi/'},
                {name: 'ORCID', link: 'https://orcid.org/0000-0002-3813-0041'},
            ]
        },
        members: [
            {grade: '修士課程2年', name: '金田 遼太郎', email: 'kaneda@photon.t.u-tokyo.ac.jp'},
            {grade: '修士課程2年', name: '嶋田 優作', email: 'shimaday@photon.t.u-tokyo.ac.jp'},
            {grade: '修士課程1年', name: '西田 征矢', email: 'nishida@photon.t.u-tokyo.ac.jp'},
            {grade: '修士課程1年', name: '西村 帆貴', email: 'nishimura.hodaka@photon.t.u-tokyo.ac.jp'},
            {grade: '修士課程1年', name: '榊原 海大', email: 'sakakibara@photon.t.u-tokyo.ac.jp'},
            {grade: '学士課程4年', name: '遠藤 剛史', email: 'endo@photon.t.u-tokyo.ac.jp'},
            {grade: '学士課程4年', name: '宮田 和香', email: 'miyata@photon.t.u-tokyo.ac.jp'},
        ]
    },
    'English': {
        title: 'Members',
        professor: {
            name: 'Prof. Shohei Chiashi',
            details: '2016.02 - Present: Associate Professor (Maruyama-Chiashi Lab.), Department of Mechanical Engineering, The University of Tokyo',
            links: [
                {name: 'CV', link: 'http://www.photon.t.u-tokyo.ac.jp/~chiashi/CV-E.html'},
                {name: 'UT Mech Profile', link: 'http://www2.mech.t.u-tokyo.ac.jp/research/%E5%8D%83%E8%B6%B3-%E6%98%87%E5%B9%B3/'},
                {name: 'Web of Science', link: 'https://publons.com/researcher/1464516/shohei-chiashi/'},
                {name: 'ORCID', link: 'https://orcid.org/0000-0002-3813-0041'},
            ]
        },
        members: [
            {grade: 'Master 2nd', name: 'Ryotaro Kaneda', email: 'kaneda@photon.t.u-tokyo.ac.jp'},
            {grade: 'Master 2nd', name: 'Yusaku Shimada',  email: 'shimaday@photon.t.u-tokyo.ac.jp'},
            {grade: 'Master 1st', name: 'Seiya Nishida',  email: 'nishida@photon.t.u-tokyo.ac.jp'},
            {grade: 'Master 1st', name: 'Hodaka Nishimura',  email: 'nishimura.hodaka@photon.t.u-tokyo.ac.jp'},
            {grade: 'Master 1st', name: 'Kaito Sakakibara',  email: 'sakakibara@photon.t.u-tokyo.ac.jp'},
            {grade: 'Bachelor 4th', name: 'Tsuyoshi Endo',  email: 'endo@photon.t.u-tokyo.ac.jp'},
            {grade: 'Bachelor 4th', name: 'Waka Miyata',  email: 'miyata@photon.t.u-tokyo.ac.jp'},
        ]
    }
}

export const MainPapersStr = {
    'Japanese': {
        title: '論文',
        main: '代表論文',
        recent: '最近（１年間）の学術論文', 
    },
    'English': {
        title: 'Publications',
        main: 'Main Papers',
        recent: 'Recent Papers (Last 1 year)',
    },
    contents: [
        {
            author: 'K. Otsuka, T. Inoue, E. Maeda, R. Kometani, S. Chiashi, S. Maruyama†,',
            title: 'On-chip sorting of long semiconducting carbon nanotubes for multiple transistors along an identical array',
            journal: 'ACS Nano, 11, 11497-11504 (2017)',
            doi: 'http://dx.doi.org/10.1021/acsnano.7b06282',
        },
        {
            author: 'S. Chiashi†, K. Kono, D. Matsumoto, J. Shitaba, N. Homma, A. Beniya, T. Yamamoto†, Y. Homma†,',
            title: 'Adsorption Effects on Radial Breathing Mode of Single-walled Carbon Nanotubes',
            journal: 'Phys. Rev. B, 91, 155415-1-155415-5 (2015)',
            doi: 'http://dx.doi.org/10.1103/PhysRevB.91.155415',
        },
        {
            author: 'S. Chiashi†, T. Hanashima, R. Mitobe, K. Nagatsu, T. Yamamoto, Y. Homma†,',
            title: 'Water Encapsulation Control in Individual Single-Walled Carbon Nanotubes by Laser Irradiation',
            journal: 'J. Phys. Chem. Lett., 5, 408-412 (2014)',
            doi: 'http://dx.doi.org/10.1021/jz402540v',
        },
        {
            author: 'Y. Homma†, S. Chiashi†, T. Yamamoto†, K. Kono, D. Matsumoto, J. Shitaba, S. Sato,',
            title: 'Photoluminescence measurements and molecular dynamics simulations of water adsorption on the hydrophobic surface of a carbon nanotube in water vapor',
            journal: 'Phys. Rev. Lett., 110, 157402-1-157402-4 (2013)',
            doi: 'http://dx.doi.org/10.1103/PhysRevLett.110.157402',
        },
        {
            author: 'K. Nagatsu, S. Chiashi, S. Konabe, Y. Homma†,',
            title: 'Brightening of Triplet Dark Excitons by Atomic Hydrogen Adsorption in Single-Walled Carbon Nanotubes Observed by Photoluminescence Spectroscopy',
            journal: 'Phys. Rev. Lett., 105, 157403-1-157403-4 (2010)',
            doi: 'http://dx.doi.org/10.1103/PhysRevLett.105.157403',
        },
        {
            author: 'Y. Homma†, S. Chiashi, Y. Kobayashi,',
            title: 'Suspended single-wall carbon nanotubes: synthesis and optical properties',
            journal: 'Rep. Prog. Phys., 72, 066502-1-066502-22 (2009)',
            doi: 'http://dx.doi.org/10.1088/0034-4885/72/6/066502',
        },
        {
            author: 'S. Chiashi†, S. Watanabe, T. Hanashima, Y. Homma,',
            title: 'Influence of Gas Adsorption on Optical Transition Energies of Single-Walled Carbon Nanotubes',
            journal: 'Nano Lett., 8, 3097-3101 (2008)',
            doi: 'http://dx.doi.org/10.1021/nl801074j',
        },
        {
            author: 'S. Chiashi, Y. Murakami, Y. Miyauchi and S. Maruyama,',
            title: '(FREE ARTICLE) Temperature Dependence of Raman Scattering from Single-walled Carbon Nanotubes -Undefined Radial Breathing Mode Peaks at High Temperatures-',
            journal: 'Jpn. J. Appl. Phys., 47-4, 2010-2015 (2008)',
            doi: 'http://dx.doi.org/10.1143/JJAP.47.2010',
        },
        {
            author: 'S. Chiashi, Y. Murakami, Y. Miyauchi, S. Maruyama†,',
            title: 'Cold wall CVD generation of single-walled carbon nanotubes and in situ Raman scattering measurements of the growth stage',
            journal: 'Chem. Phys. Lett., 386, 89-94 (2004)',
            doi: 'http://dx.doi.org/10.1016/j.cplett.2003.12.126',
        },
        {
            author: 'S. Maruyama†, R. Kojima, Y. Miyauchi, S. Chiashi, M. Kohno,',
            title: 'Low-temperature synthesis of high-purity single-walled carbon nanotubes from alcohol',
            journal: 'Chem. Phys. Lett., 360, 229-234 (2002)',
            doi: 'http://dx.doi.org/10.1016/S0009-2614(02)00838-2',
        },
    ]
}

export const LecturesStr = {
    'Japanese': {
        title: '講義（千足）',
        contents: [
            '機械分子工学第一',
            ' 熱工学第二', 
            '機械分子工学第二', 
            '機械工学総合演習第二', 
            'Molecular Dynamics and Nanotechnology (大学院)',
        ]
    },
    'English': {
        title: 'Lectures (Chiashi)',
        contents: [
            'Mechanical Molecular Engineering I',
            'Thermodynamics II',
            'Mechanical Molecular Engineering II',
            'Mechanical Engineering Comprehensive Exercise II',
            'Molecular Dynamics and Nanotechnology (Graduate)',
        ]
    }
}

export const OpenLabStr = {
    'Japanese': {
        title: 'オープンラボ',
        poster: '千足研究室紹介ポスター',
        schedule_title: '開催日程',
        schedule: [
            "2023年10月3日 午後 (詳細未定)",
            "2023年10月5日 午後 (詳細未定)",
        ],
        contents: [

        ],
    },
    'English': {
        title: 'Open Lab.',
        poster: 'Poster Introducing Chiashi Lab.',
        schedule_title: 'Schedule',
        schedule: [
            "October 3, 2023 in the afternoon (details to be determined)",
            "October 5, 2023 in the afternoon (details to be determined)",
        ],
        contents: [

        ],
    }
}

export const AccessStr = {
    'Japanese': {
        title: 'アクセス',
        contents: [],
    },
    'English': {
        title: 'Access',
        contents: [],
    }
}
