import React from "react";
import { Card } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import type { StoryCardType } from "../data/PostCard";
import { StackCol, StackRow } from "../utils";
import { ProfilePhoto } from "./ProfileAvatar";
import Carousel from "./Carousel";

const StoryCardContent = ({ story }: { story: StoryCardType }) => {
  const [isContentExpanded, setIsContentExpanded] = React.useState(false);

  return (
    <StackCol spacing={1} sx={{ marginTop: "8px" }}>
      <h4>{story.title}</h4>
      <Carousel imageList={story.images} />
      <p style={{ fontSize: "12px" }}>
        {isContentExpanded
          ? story.content
          : `${story.content.substring(0, 100)}...`}
        <button
          style={{
            all: "unset",
            color: "var(--link-color)",
            marginLeft: "4px",
          }}
          onClick={() => setIsContentExpanded(!isContentExpanded)}
        >
          {isContentExpanded ? "Show Less" : "Show More"}
        </button>
      </p>
    </StackCol>
  );
};

const StoryCardFooter = ({
  storyId,
  userId,
  vote,
}: {
  storyId: number;
  userId: number;
  vote: {
    user_vote: "upvoted" | "downvoted" | null;
    upvotes_count: number;
    downvotes_count: number;
  };
}) => {
  const handleUpvote = () => {
    // TODO: call API to register upvote
    console.log("Upvote clicked for story", storyId);
  };

  const handleDownvote = () => {
    // TODO: call API to register downvote
    console.log("Downvote clicked for story", storyId);
  };

  return (
    <StackRow spacing={1} sx={{ marginTop: 1 }}>
      <StackRow sx={{ alignItems: "center" }}>
        <IconButton onClick={handleUpvote} size="small">
          <ThumbsUp
            size={16}
            color={
              vote.user_vote === "upvoted" ? "var(--accent)" : "var(--text)"
            }
          />
        </IconButton>
        <Typography variant="caption">{vote.upvotes_count}</Typography>
      </StackRow>

      <StackRow sx={{ alignItems: "center" }}>
        <IconButton onClick={handleDownvote} size="small">
          <ThumbsDown
            size={16}
            color={
              vote.user_vote === "downvoted" ? "var(--accent)" : "var(--text)"
            }
          />
        </IconButton>
        <Typography variant="caption">{vote.downvotes_count}</Typography>
      </StackRow>
    </StackRow>
  );
};

const StoryCard = ({ story }: { story: StoryCardType }) => {
  return (
    <Card sx={{ margin: "16px 0", padding: "8px" }}>
      <StackRow spacing={1} sx={{ alignItems: "center" }}>
        <ProfilePhoto
          src={story.user.user_photo}
          user_name={story.user.user_name}
        />
        <span style={{ fontSize: "14px" }}>{story.user.user_name}</span>
      </StackRow>
      <StoryCardContent story={story} />

      <StoryCardFooter
        storyId={story.story_id}
        userId={story.user.user_id}
        vote={story.vote_summary}
      />
    </Card>
  );
};

export default StoryCard;
