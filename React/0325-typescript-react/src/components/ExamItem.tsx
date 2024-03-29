import { ExamItemProps } from './types';
interface Props {
  post: ExamItemProps;
}
const ExamItem = ({ post }: Props) => {
  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default ExamItem;
