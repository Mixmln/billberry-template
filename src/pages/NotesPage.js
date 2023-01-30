import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import NoteSection from "../components/NotesPage/Notes/NoteSection";
import NotesHero from "../components/NotesPage/NotesHero/NotesHero";

function NotesPage() {
	return (
		<div className="App">
			<Nav></Nav>
			<NotesHero></NotesHero>
			<NoteSection></NoteSection>
			<Footer></Footer>
		</div>
	);
}

export default NotesPage;
