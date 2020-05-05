import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RandomItem from "../utils/RandomItem";

const DiscoverContainer = styled.div`
	padding: 0 10px;
	margin-bottom: 50px;
`;

const Topic = styled(Link)`
	text-decoration: none;
	display: flex;
	color: #333;
	padding: 9px 5px;
	border-top: 1px solid #cccccc77;
	font-size: 1.1em;
	font-weight: 600;
	align-items: center;

	&:last-of-type {
		border-bottom: 1px solid #cccccc77;
	}
`;

const DiscoverTitle = styled.h3`
	margin: 0;
	color: #333;
	font-size: 1.4em;
	margin-top: 7px;
`;

const SubIcon = styled.span`
	background-color: ${(props) => props.color};
	color: #fff;
	width: 2.2rem;
	height: 2.2rem;
	display: flex;
	margin-right: 8px;
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	font-size: 1.5em;
	font-weight: 700;
`;

const SearchBox = styled.input`
	width: 100%;
	padding: 8px;
	margin: 5px 0;
	border: none;
	background-color: #cccccc44;
	border-radius: 4px;
	position: relative;
	font-size: 16px;
`;

const Topics = ["Art", "Sketchpad", "Cats", "Pic", "SkyPorn", "AstroPhotography", "itookapicture", "Pics", "ArtJunkie"];
const TopicColours = ["#edcc68", "#ed8368", "#6892ed", "#be68ed", "#a1d676", "#d77ed9", "#cc6060", "#56b06e", "#379472", "#e3dd3b"];

const Discover = () => {
	const [searchQ, setSearchQ] = useState("");
	const FilteredTopics = Topics.filter((i) => i.toLowerCase().indexOf(searchQ.toLowerCase()) > -1);

	return (
		<DiscoverContainer>
			<DiscoverTitle>Topics</DiscoverTitle>
			<SearchBox placeholder="Search or Enter Sub name" value={searchQ} onChange={(e) => setSearchQ(e.target.value.replace(/[\W_]+/, ""))} />
			{FilteredTopics.map((i, ind) => {
				return (
					<Topic key={ind} to={`/r/${i}`}>
						<SubIcon color={RandomItem(TopicColours)}>#</SubIcon>
						{i}
					</Topic>
				);
			})}

			{searchQ && (
				<Topic to={`/r/${searchQ}`}>
					<SubIcon color={RandomItem(TopicColours)}>?</SubIcon>
					{searchQ}
				</Topic>
			)}
		</DiscoverContainer>
	);
};

export default Discover;
