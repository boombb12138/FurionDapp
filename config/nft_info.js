import { getNftInfo, getNftInfoByProject, getNftImages, getNftWeekPrice } from "@/api/nft_info";
import { getNftDynamic } from "@/api/nft_dynamic";
import getCharts from "@/utils/getCharts";
import { getSeparatePoolFactoryABI } from "@/utils/common/contractABI";
import { getContract } from "@/utils/common/index";

export const nft_info = {
    init: false,
    nft_list: [
        {
            "id": 0,
            "collection": "Cryptoadz",
            "address": "0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6",
            "symbol": "TOADZ",
            "avatar": "https://lh3.googleusercontent.com/iofetZEyiEIGcNyJKpbOafb_efJyeo7QOYnTog8qcQJhqoBU-Vu9l3lXidZhXOAdu6dj4fzWW6BZDU5vLseC-K03rMMu-_j2LvwcbHo=s120",
            "banner_url": "https://lh3.googleusercontent.com/fUxEZ8mnuCho4KrCZDVckFz4mSr8QwjpS05SP-Zei2P_rw7N81cBD__0YwWsACd1Y0qLZgvdMPhUmfPe17J51QQjShlmTTXxj2G7-PQ=s2500",
            "description": "CrypToadz are a collection 6969 small amphibious creatures trying to escape the tyrannical rule of the Evil King Gremplin. Created by Gremplin, with a small bit of help from his friends.\\r\\n\\r\\nThis project is in the public domain. Feel free to use the toadz in any way you want.",
            "external_link": "https://cryptoadz.io",
            "twitter_link": "https://twitter.com/cryptoadzNFT",
            "volume": 70987,
            "_24h": "+62.70%",
            "_7d": "-28.36%",
            "floor_price": 1.85,
            "owners": 76683307,
            "items": 7025,
            "fXprice": 2,
            "last7Days": [
                1.89,
                1.89,
                1.85,
                1.85,
                1.89,
                1.89,
                1.89
            ],
            "last7Days_type": 1,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            1.89,
                            1.89,
                            1.85,
                            1.85,
                            1.89,
                            1.89,
                            1.89
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#77CA95",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        },
        {
            "id": 1,
            "collection": "Invisible Friends",
            "address": "0x59468516a8259058bad1ca5f8f4bff190d30e066",
            "symbol": "INVSBLE",
            "avatar": "https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s120",
            "banner_url": "https://lh3.googleusercontent.com/FtZWWUOArzD6WPyQ97rumWFhxm8IxFHNYg0Jucx0TdJ31q3VVDqnJ4nFu1RdC68fYEnFtvvtdoT2PrqFhyxDb3jcVXA3c_QfJnpiBNM=s2500",
            "description": "Hiding in the metaverse.\\r\\n\\r\\nInvisible Friends is a collection of 5000 animated invisible characters by Markus Magnusson.\\r\\n\\r\\nInvisible Friends is a Random Character Collective project.\\r\\n\\r\\nSee also ARRAY[Invisible Friends Specials](https://opensea.io/collection/invisiblefriends-specials).",
            "external_link": "https://invisiblefriends.io",
            "twitter_link": "https://twitter.com/InvsbleFriends",
            "volume": 43655,
            "_24h": "+62.52%",
            "_7d": "-11.57%",
            "floor_price": 2.27,
            "owners": 127635912,
            "items": 5000,
            "fXprice": 2.5,
            "last7Days": [
                2.28,
                2.27,
                2.27,
                2.27,
                2.27,
                2.27,
                2.28
            ],
            "last7Days_type": 2,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(255, 155, 155, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(255, 155, 155, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            2.28,
                            2.27,
                            2.27,
                            2.27,
                            2.27,
                            2.27,
                            2.28
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#ED5959",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        },
        {
            "id": 2,
            "collection": "Cool Cats",
            "address": "0x1a92f7381b9f03921564a437210bb9396471050c",
            "symbol": "COOL",
            "avatar": "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120",
            "banner_url": "https://lh3.googleusercontent.com/H4Iu36XQNJqVlF99-0BuQna0sUlUcIrHt97ss3le_tAWw8DveEBfTktX3S0bP6jpC9FhN1CKZjoYzZFXpWjr1xZfQIwSSLeDjdi0jw=s2500",
            "description": "Cool Cats is a collection of 9,999 randomly generated and stylistically curated NFTs that exist on the Ethereum Blockchain. Cool Cat holders can participate in exclusive events such as NFT claims, raffles, community giveaways, and more. Remember, all cats are cool, but some are cooler than others.\\r\\n\\r\\n- ARRAY[Cool Cats Collabs](https://opensea.io/collection/cool-cats-collabs)\\r\\n- ARRAY[Cool Cats Events](https://opensea.io/collection/cool-cats-events)\\r\\n- ARRAY[Cool Cats Achievements](https://opensea.io/collection/cool-cats-achievements)\\r\\n- ARRAY[Cool Cats Originals](https://opensea.io/collection/cool-cats-originals)",
            "external_link": "http://coolcatsnft.com",
            "twitter_link": "https://twitter.com/coolcatsnft",
            "volume": 110817,
            "_24h": "+439.25%",
            "_7d": "+63.09%",
            "floor_price": 2.389,
            "owners": 20414503,
            "items": 9941,
            "fXprice": 3,
            "last7Days": [
                2.35,
                2.35,
                2.3,
                2.35,
                2.35,
                2.389,
                2.35
            ],
            "last7Days_type": 1,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            2.35,
                            2.35,
                            2.3,
                            2.35,
                            2.35,
                            2.389,
                            2.35
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#77CA95",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        },
        {
            "id": 3,
            "collection": "World Of Women",
            "address": "0xe785e82358879f061bc3dcac6f0444462d4b5330",
            "symbol": "WOW",
            "avatar": "https://lh3.googleusercontent.com/EFAQpIktMBU5SU0TqSdPWZ4byHr3hFirL_mATsR8KWhM5z-GJljX8E73V933lkyKgv2SAFlfRRjGsWvWbQQmJAwu3F2FDXVa1C9F",
            "banner_url": "https://lh3.googleusercontent.com/GHhptRLebBOWOy8kfXpYCVqsqdes-1-6I_jbuRnGTHHW6TD63CtciH75Dotfu2u8v6EmkWt-tjhkFRVLxRUwgMfKqqy5W24AolJayeo=s2500",
            "description": "A community celebrating representation, inclusivity, and equal opportunities for all.\\r\\nUnited by a first-of-its-kind collection, featuring 10,000 artworks of diverse and powerful women.\\r\\n\\r\\nCreated and Illustrated by Yam Karkai (@ykarkai)\\r\\n\\r\\nNew official collection World of Women Galaxy available here:\\r\\nhttps://opensea.io/collection/world-of-women-galaxy",
            "external_link": "http://worldofwomen.art",
            "twitter_link": "https://twitter.com/worldofwomennft",
            "volume": 71659,
            "_24h": "-50.81%",
            "_7d": "+3.57%",
            "floor_price": 3.2,
            "owners": 56314509,
            "items": 10000,
            "fXprice": 3.5,
            "last7Days": [
                3.2,
                3.2,
                3.2,
                3.2,
                3.2,
                3.2,
                3.25
            ],
            "last7Days_type": 2,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(255, 155, 155, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(255, 155, 155, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            3.2,
                            3.2,
                            3.2,
                            3.2,
                            3.2,
                            3.2,
                            3.25
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#ED5959",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        },
        {
            "id": 4,
            "collection": "PudgyPenguins",
            "address": "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
            "symbol": "PPG",
            "avatar": "https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s120",
            "banner_url": "https://lh3.googleusercontent.com/13g3FRwKuCmawyeH_rN5VwYbQZ8KrWdN8IZf4_uKJ3IeLjligIY7ZZ_HR7b48RKUJuUfevFTMzxFJcBWdn51TyZVoAXNPqh1TCIprw=s2500",
            "description": "Pudgy Penguins is a collection of 8,888 NFTs, waddling through Web3. Embodying empathy & compassion, Pudgy Penguins are a beacon of positivity in the NFT Space. Each holder receives exclusive access to experiences, events, and more. \\n\\nJoin the Huddle now and spread good vibes across the meta. \\n\\nARRAY[pudgypenguins.com](https://pudgypenguins.com)\\n\\nPudgy Collections:\\nARRAY[Lil Pudgys](https://opensea.io/collection/lilpudgys) | ARRAY[Pudgy Rods](https://opensea.io/collection/pudgyrods)",
            "external_link": "https://www.pudgypenguins.com/",
            "twitter_link": "https://twitter.com/pudgypenguins",
            "volume": 56776,
            "_24h": "+356.74%",
            "_7d": "+63.04%",
            "floor_price": 2.4299,
            "owners": 451282753,
            "items": 8888,
            "fXprice": 2,
            "last7Days": [
                2.429,
                2.4299,
                2.42,
                2.43,
                2.429,
                2.4297,
                2.19
            ],
            "last7Days_type": 1,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            2.429,
                            2.4299,
                            2.42,
                            2.43,
                            2.429,
                            2.4297,
                            2.19
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#77CA95",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        },
        {
            "id": 5,
            "collection": "CryptoDickbutts S3",
            "address": "0x42069abfe407c60cf4ae4112bedead391dba1cdb",
            "symbol": "CDB",
            "avatar": "https://lh3.googleusercontent.com/vw-gp8yUYkQsxQN5xbHrWEhY7rQWQZhIjgO2tvLxu46VY6iwulwWZt5VFS2Q9gy9qJaiJk8QspZs0qaM9z1ODeIyeUUseABOxdfVrC8=s120",
            "banner_url": "https://lh3.googleusercontent.com/BKe5JQV60t_ExHygABrea_2-ZrDTanAZng6sGePzffYJHb7OdTw-G8JqTcOqRzYcAZQIHeZbhSbgoYv6ionrwxkFU6Wb9TKdwUWK-g=s2500",
            "description": "Once a utopia, Gooch Island has fallen and CryptoDickbutts have been evacuated. Series 3 features 5200 all new CryptoDickbutts, each with a set of randomly generated traits.\\r\\n\\r\\nKeep away from children.\\r\\n\\r\\nJoin the Discord: https://discord.gg/uhRmzP7Uuu\\r\\nTwitter: https://twitter.com/CryptoDickbutts",
            "external_link": "https://cryptodickbutts.com/",
            "twitter_link": "https://twitter.com/CryptoDickbutts",
            "volume": 9569,
            "_24h": "+37.55%",
            "_7d": "+432.87%",
            "floor_price": 3.25,
            "owners": 58539135,
            "items": 5200,
            "fXprice": 3.5,
            "last7Days": [
                3.2499,
                3.25,
                3.25,
                3.25,
                3.25,
                3.2498,
                2.82
            ],
            "last7Days_type": 1,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            3.2499,
                            3.25,
                            3.25,
                            3.25,
                            3.25,
                            3.2498,
                            2.82
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#77CA95",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        }
    ]
};

export const initNftInfo = async (network, loadWeek) => {
    let nft_info = { nft_init: false, nft_list: [] };

    let result = await getNftInfo(network);
    // console.log('NFT info request', result);
    let raw_data = result['data']['data'];
    let final_result = [];

    for (let i = 0; i < raw_data.length; i++) {
        let temp = {
            id: i,
            collection: raw_data[i]['project'],
            address: raw_data[i]['address'],
            symbol: raw_data[i]['symbol'],
            avatar: raw_data[i]['image_url'],
            banner_url: raw_data[i]['banner_url'],
            description: raw_data[i]['description'],
            external_link: raw_data[i]['external_link'],
            twitter_link: raw_data[i]['twitter_link'],

            volume: raw_data[i]['volume'],
            _24h: `${(raw_data[i]['_24hs'] < 0 ? "" : "+") + (raw_data[i]['_24hs'] * 100).toFixed(2)}%`,
            _7d: `${(raw_data[i]['_7ds'] < 0 ? "" : "+") + (raw_data[i]['_7ds'] * 100).toFixed(2)}%`,
            floor_price: raw_data[i]['floor_price'],
            owners: raw_data[i]['owners'],
            items: raw_data[i]['total_supply'],
            fXprice: raw_data[i]['reference_price_high'],
            last7Days: raw_data[i]['week_price'],
            last7Days_type: raw_data[i]['type'],
        };
        final_result.push(temp);
    }
    final_result = final_result.map((item) => {
        return {
            ...item,
            option: getCharts(item.last7Days, item.last7Days_type)
        };
    });

    console.log(final_result)


    nft_info.nft_list = final_result;
    nft_info.init = true;
    return nft_info;
}

export const initPooledNftInfo = async (network, loadWeek) => {
    let nft_info = { nft_init: false, nft_list: [] };

    const factoryContract = await getContract(await getSeparatePoolFactoryABI(), '');
    const nftsWithPool = await factoryContract.methods.getAllNfts().call();

    let result = await getNftInfo(network);
    let raw_data = result['data']['data'];
    let final_result = [];

    for (let i = 0; i < nftsWithPool.length; i++) {
      const nftAddress = nftsWithPool[i];

      // Assume collection is found in contract but not in backend
      let temp = {
          id: i,
          collection: "--",
          address: nftAddress,
          symbol: "--",
          avatar: "--",
          banner_url: "--",
          description: "--",
          external_link: "--",
          twitter_link: "--",

          volume: "--",
          _24h: "--",
          _7d: "--",
          floor_price: "--",
          owners: "--",
          items: "--",
          fXprice: "--",
          last7Days: "--",
          last7Days_type: "--",
      };

      for (let j = 0; j < raw_data.length; j++) {
        // Collection found in contract and backend
        if (raw_data[j]['address'] == nftAddress) {
            temp.collection = raw_data[j]['project'],
            temp.symbol = raw_data[j]['symbol'],
            temp.avatar = raw_data[j]['image_url'],
            temp.banner_url = raw_data[j]['banner_url'],
            temp.description = raw_data[j]['description'],
            temp.external_link = raw_data[j]['external_link'],
            temp.twitter_link = raw_data[j]['twitter_link'],

            temp.volume = raw_data[j]['volume'],
            temp._24h = `${(raw_data[j]['_24hs'] < 0 ? "" : "+") + (raw_data[j]['_24hs'] * 100).toFixed(2)}%`,
            temp._7d = `${(raw_data[j]['_7ds'] < 0 ? "" : "+") + (raw_data[j]['_7ds'] * 100).toFixed(2)}%`,
            temp.floor_price = raw_data[j]['floor_price'].toFixed(2),
            temp.owners = raw_data[j]['owners'],
            temp.items = raw_data[j]['total_supply'],
            temp.fXprice = raw_data[j]['reference_price_high'].toFixed(2),
            temp.last7Days = raw_data[j]['week_price'],
            temp.last7Days_type = raw_data[j]['type'],

            final_result.push(temp);
            break;
        }
      }
      // Collection is found in contract but not in backend
      final_result.push(temp);
    }

    final_result = final_result.map((item) => {
        return {
            ...item,
            option: getCharts(item.last7Days, item.last7Days_type)
        };
    });

    nft_info.nft_list = final_result;
    nft_info.init = true;
    return nft_info;
}
