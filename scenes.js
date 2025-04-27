const scenes = {
    scene1: [
        {
            turnId: 1,
            lines: [
                {
                    speaker: "Mary Fields",
                    text: "Detective? Mary Fields.",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "Steven Keel.",
                    avatar: "url('https://i.pravatar.cc/60?img=2')",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 2,
            lines: [
                {
                    speaker: "Mary Fields",
                    text: "Garden at the back, reports came in this morning. Some Ellen Clyde, just wed. I've got to say, I’ve seen some gruesome murders in my time, but nothing comes close to this.",
                    avatar: "url('https://i.pravatar.cc/60?img=1')",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "Not every day you get to see a lady on a butcher hook, I suppose.",
                    avatar: "url('https://i.pravatar.cc/60?img=2')",
                    type: "dialogue"
                },
                {
                    speaker: "Mary Fields",
                    text: "And so young, too.",
                    avatar: "url('https://i.pravatar.cc/60?img=1')",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 3,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "Who made the report?",
                    avatar: "url('https://i.pravatar.cc/60?img=2')",
                    type: "dialogue"
                },
                {
                    speaker: "Mary Fields",
                    text: "Uh, her husband. His maid came to him out of breath this morning, poor thing could barely speak.",
                    avatar: "url('https://i.pravatar.cc/60?img=1')",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "I could imagine.",
                    avatar: "url('https://i.pravatar.cc/60?img=2')",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 4,
            lines: [
                {
                    speaker: "Mary Fields",
                    text: "That's not on my account, though. You'll have to hear from him. Hear he's pretty shook. The wedding was yesterday, too.",
                    avatar: "url('https://i.pravatar.cc/60?img=1')",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "Must have been personal. Where’s the body?",
                    avatar: "url('https://i.pravatar.cc/60?img=2')",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 5,
            lines: [
                {
                    speaker: "Mary Fields",
                    text: "She's been taken down and moved to a morgue downtown. Husband couldn't bear the sight anymore. But no worries, forensics has got all the photos they need, evidence is being bagged up as we speak.",
                    avatar: "url('https://i.pravatar.cc/60?img=1')",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 6,
            lines: [
                {
                    type: "narration",
                    text: "Keel steps onto the scene. The courtyard feels still. Blood streaks across the cobblestone, a trail of boot prints winding away from the tree. Nearby, forensics move with quiet urgency. One person seals a bag containing thick, salt-crusted fishing rope, while another tags a butcher's hook, heavy and stained. Keel walks along the path slowly, absorbing the surroundings. He stops near the prints and crouches down to study their direction and depth. After a moment, he rises and dusts off his knee. He turns to Mary, who has been watching from a few paces back. She gives a slight nod — she’s seen plenty, but even this scene rattles her."
                }
            ]
        },
        {
            turnId: 7,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "Where’s Mr. Clyde?",
                    avatar: "url('https://i.pravatar.cc/60?img=2')",
                    type: "dialogue"
                },
                {
                    speaker: "Mary Fields",
                    text: "Sitting room, I wouldn’t bother with him, not in the state he’s in.",
                    avatar: "url('https://i.pravatar.cc/60?img=1')",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "Right, get me a list of all wedding guests last night, find out as much as you can about them. I’m going to talk to him, things like this can't wait.",
                    avatar: "url('https://i.pravatar.cc/60?img=2')",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 8,
            lines: [
                {
                    type: "narration",
                    text: "Keel sits down with Dominic to go over what happened. Dominic tells him the last time anyone saw Ellen was when she left the party with her friend Serena to take a walk in the garden. Since then, no one's seen or heard from Serena. That sets off alarms in Keel’s mind — someone disappearing right after a murder? Feels off. He starts to think Serena might know more than she’s letting on… or maybe she’s involved."
                }
            ]

        }
    ],
    scene2: [
        {
            turnId: 1,
            lines: [
                {
                    type: "narration",
                    text: "Keel arrives at the docks, search warrant in hand. Tomas is out at sea — exactly how Keel wants it. He finds his berth, the berth is cramped and cluttered, filled with dusty equipment and old food supplies. In the corner, something catches Keel’s eye: a safe, tucked away and secured with a digital lock.\n"

                },
                {
                    speaker: "Det. Keel",
                    text: "I have to get in somehow",
                    avatar: "url('https://i.pravatar.cc/60?img=2')",
                    type: "dialogue"
                }

            ]


        },
        {
            turnId: 2,
            puzzlePage: 'puzzle3.html',
            lines: []

        },
        {
            turnId: 3,
            lines: [
                {

                type: "narration",
                text: "Inside Tomas' safe, Keel finds a collection of ledgers, their pages worn and the ink beginning to fade. The ledgers record a series of transactions with The Black Current, a notorious crime syndicate known for smuggling. The entries detail several drug shipments disguised as fish deliveries, with the goods being moved under the guise of legitimate trade. The most recent transaction occurred two years ago. This suggests the syndicate had been using the fishing operation to move drugs into the area. With this evidence in hand, Tomas is arrested.\n"
            }]
        }],
    scene3: [
        {
            turnId: 1,
            lines: [
                {
                    type: "narration",
                    text: "Keel is informed that Serena was brought into a nearby station by a passerby, disoriented and uncoordinated. She passed out at the reception and was promptly taken to a hospital. The doctor's report reveals trace amounts of scopolamine in her blood, with estimates suggesting it was ingested during the wedding party.\n\nAfter conducting further inquiries, Keel discovers that Dominic had hired a personal caterer for the event, Imani Costa. With this new lead in hand, Keel immediately arranges a meeting with Imani.",
                }
            ]
        },
        {
            turnId: 2,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "Glad you could make time for me on such short notice.",
                    type: "dialogue"
                },
                {
                    speaker: "Imani Costa",
                    text: "Can't say I was busy.",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "Well, that’s good to hear. I’m here to ask you about the wedding, specifically the food and drinks. You were in charge of that, right?",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 3,
            lines: [
                {
                    speaker: "Imani Costa",
                    text: "Yep, Dominic hired me for the whole thing. Food, drinks, the works. He’s got quite the taste, you know.",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "I imagine. Anything out of the ordinary happen that night? Something you might not have expected?",
                    type: "dialogue"
                },
                {
                    speaker: "Imani Costa",
                    text: "Not really, but my drinks were definitely out of the ordinary for Dominic's guests. I’ve dabbled in some... exotic concoctions over the years—nothing too out there, but a few that’ll get you talking.",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 4,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "Exotic concoctions, huh? Sounds interesting. What kind of drinks are we talking about here?",
                    type: "dialogue"
                },
                {
                    speaker: "Imani Costa",
                    text: "Oh, nothing too wild—just a few mixtures I tried out. Things with... unique flavors, a bit more of a punch than your average cocktail.",
                    type: "dialogue"
                },
                {
                    speaker: "Keel",
                    text: "Hmm, since you didn't notice anything unusual, I'll be on my way.",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 5,
            lines: [
                {
                    type: "narration",
                    text: "On his way out, Keel manages to swipe Imani's recipe book and is taken aback by the absurdity of the concoctions inside. One recipe, Final Rest, is encrypted.Keel recognises this is to be a simple Caesar shift cypher. Accompanying the recipe is a clue: \"Beyond the gate, we drink without judgment. But to drink of this is to be judged; the gate that grants freedom grants the keys to condemnation."
                }
            ]
        },
        {
            turnId: 6,
            puzzlePage: "caesar.html",
            lines: []
        },
        {
            turnId: 7,
            lines: [
                {   speaker: "Det. Keel",
                    text: "This drink contains scopolamine, the same drug used to subdue Serena. But in this amount it's not nearly potent enough",
                    type: "dialogue"
                }
            ]

        }

    ],
    scene4: [
        {
            turnId: 1,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "Glad I caught you in a good mood this time.",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Dominic Halden",
                    text: "I’m afraid it’s the alcohol.",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "Still, good to see.",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Dominic Halden",
                    text: "It is. It is.",
                    avatar: "",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 2,
            lines: [
                {
                    speaker: "Alec Moreno",
                    text: "Any progress in your investigation, Detective?",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "That’s why I’m here. Imani — I had my reasons, but she’s clear. Serena came to. Her story confirms Imani’s only fault was recklessness, not intent.",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Dominic Halden",
                    text: "I didn’t think she had it in her. Not surprised.",
                    avatar: "",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 3,
            lines: [
                {
                    speaker: "Alec Moreno",
                    text: "Keel, when does this game end? A friend. A caterer. A fisherman with an honorary invite? Who’s next — the gardener?",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "Honorary?",
                    avatar: "",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 4,
            lines: [
                {
                    speaker: "Alec Moreno",
                    text: "Dom here made a contest of it: “Whoever reels in the most fish gets a seat at the table!”",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Dominic Halden",
                    text: "I am passionate about salmon.",
                    avatar: "",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 5,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "The fisherman — he works for you?",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Dominic Halden",
                    text: "Yeah. Bought the docks two years ago. I’m neck-deep in expansion now. Paperwork’s a nightmare.",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Alec Moreno",
                    text: "Nobody loves paperwork.",
                    avatar: "",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 6,
            lines: [
                {
                    type: "narration",
                    text: "Tomas worked with the cartel. The last record was two years ago. That lines up with Dominic’s acquisition. Could this murder be retaliation?"
                }
            ]
        },
        {
            turnId: 7,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "Are you both business partners?",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Dominic Halden",
                    text: "Oh, no. If anything, rivals.",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Alec Moreno",
                    text: "Friendly ones.",
                    avatar: "",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 8,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "Right. That’s all I’ve got for today. Before I go, the gardener. Where was she during the party?",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Dominic Halden",
                    text: "She left before it ended. Starts work early, you know.",
                    avatar: "",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 9,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "I see. She’s the one who found the body?",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Dominic Halden",
                    text: "No, that was the maid. The gardener didn’t show up at all that day.",
                    avatar: "",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 10,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "Sick?",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Dominic Halden",
                    text: "Didn’t say.",
                    avatar: "",
                    type: "dialogue"
                }
            ]
        },
        {
            turnId: 11,
            lines: [
                {
                    speaker: "Det. Keel",
                    text: "Where can I find her?",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Alec Moreno",
                    text: "And now he’s after the gardener.",
                    avatar: "",
                    type: "dialogue"
                },
                {
                    speaker: "Det. Keel",
                    text: "Promising lead, no?",
                    avatar: "",
                    type: "dialogue"
                }
            ]
        }
    ],
};