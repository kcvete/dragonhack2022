import React, { useEffect, useState } from "react";
import { doc, setDoc, collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'
import { ImageList, ImageListItem } from "@mui/material";

function Feed() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "completed_tasks"), orderBy('timestamp', 'desc'), limit(18));

        async function getRows() {
            const querySnapshot = await getDocs(q)
            var results = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                let data = doc.data();

                results.push({
                    image: data.image,
                    id: doc.id
                });
            });
            setRows(results);
        }

        getRows();
    }, []);

    return (
        <div>
            <div class="section-title">Wall of fame</div>
            <ImageList cols={3} rowHeight={164}>
                {rows.map((item) => (
                    <div>{item.id}
                        <ImageListItem key={item.image}>
                            <img
                                src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                loading="lazy"
                                alt=""
                            />
                        </ImageListItem>
                    </div>
                ))}
            </ImageList>
        </div>
    );
}

export default Feed;
